import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Card, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const FileUpload = (props) => {
  const theme = useTheme();
  const { title = 'Chọn file', files = [], setFiles = () => {}, multiple = false, xs = 12, sm = 12, lg = 12 } = props;

  const removeAll = () => {
    setFiles([]);
  };

  const removeFile = (item) => {
    if (item) setFiles((pre) => pre.filter((f) => JSON.stringify(f) !== JSON.stringify(item)));
  };

  const onChange = (e) => {
    const files = e.target.files;
    const imagesArray = [];
    for (let i = 0; i < files.length; i++) {
      files[i].preview = URL.createObjectURL(files[i]);
      imagesArray.push(files[i]);
    }
    setFiles((pre) => [...pre, ...imagesArray]);
  };

  return (
    <Grid item xs={xs} sm={sm} lg={lg}>
      <Card variant="outlined" sx={{ p: 2 }}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="h5" sx={{ fontWeight: '400' }}>
            {title}
          </Typography>
          <Box gap={2} display={'flex'}>
            <Button type="button" onClick={removeAll} component="label" color="error" variant="contained" startIcon={<ClearIcon />}>
              Bỏ chọn
            </Button>
            <Button type="button" component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Chọn file
              <VisuallyHiddenInput onChange={onChange} multiple={multiple} type="file" />
            </Button>
          </Box>
        </Box>
        <Card variant="outlined" sx={{ p: 3, mt: 2, backgroundColor: theme.palette.grey[50] }}>
          <Box gap={3} display={'flex'} flexDirection={'row'} sx={{ minHeight: 50 }}>
            {files[0] &&
              files.map((f, index) => (
                <Stack key={index} sx={{ maxHeight: 200, maxWidth: 200 }} spacing={1}>
                  <CardMedia sx={{ minHeight: 120, maxWidth: 200 }} component="img" image={f.preview || f} alt={title} />
                  <Typography variant="h5" textAlign={'center'} sx={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
                    {f.name}
                  </Typography>
                  {multiple && (
                    <Box display={'flex'} justifyContent={'center'}>
                      <Button sx={{ p: '4px 0' }} onClick={() => removeFile(f)} type="button" color="error" variant="contained">
                        <ClearIcon />
                      </Button>
                    </Box>
                  )}
                </Stack>
              ))}
          </Box>
        </Card>
      </Card>
    </Grid>
  );
};

export default FileUpload;
