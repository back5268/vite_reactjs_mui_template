import { Box, Button, Card, Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useTheme } from '@emotion/react';
import { FormInput } from '../forms';

const KeyValue = (props) => {
  const { d, index, handleDelete, handleSetData } = props;

  return (
    <Grid container mt={2} mb={2}>
      <Grid item xs={11} lg={11} display={'flex'} gap={2}>
        <FormInput label="Key" value={d.key} onChange={(e) => handleSetData({ key: e.target.value }, index)} />
        <FormInput label="Value" value={d.value} onChange={(e) => handleSetData({ value: e.target.value }, index)} />
      </Grid>
      <Grid item xs={1} lg={1} display={'flex'} alignContent={'center'} justifyContent={'center'}>
        <IconButton onClick={() => handleDelete(index)} color="error" aria-label="delete">
          <DeleteOutlinedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const KeyValues = (props) => {
  const theme = useTheme();
  const { title = 'Dữ liệu', data = [{ key: '', value: '' }], setData = () => {}, xs = 12, sm = 12, lg = 12 } = props;

  const handleAdd = () => {
    setData((pre) => [...pre, { key: '', value: '' }]);
  };

  const handleDelete = (index) => {
    if (data && data[0]) {
      setData((pre) => pre.filter((p, i) => i !== index));
    }
  };

  const handleSetData = (value, index) => {
    if ((index || index === 0) && value && typeof value === 'object') {
      let newData = data;
      newData[index] = { ...newData[index], ...value };
      setData([...newData]);
    }
  };

  return (
    <Grid item xs={xs} sm={sm} lg={lg} sx={{ mt: 2, mb: 2 }}>
      <Card variant="outlined" sx={{ p: 2 }}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="h5" sx={{ fontWeight: '400' }}>
            {title}
          </Typography>
          <Box gap={2} display={'flex'}>
            <Button type="button" component="label" onClick={handleAdd} variant="contained" startIcon={<AddIcon />}>
              Thêm
            </Button>
          </Box>
        </Box>
        <Card variant="outlined" sx={{ px: 2, py: 1, mt: 2, backgroundColor: theme.palette.grey[50] }}>
          {data.map((d, index) => {
            return <KeyValue key={index} d={d} index={index} handleDelete={handleDelete} handleSetData={handleSetData} />;
          })}
        </Card>
      </Card>
    </Grid>
  );
};

export default KeyValues;
