import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Divider, Typography } from '@mui/material';
import FormUpdate from './FormUpdate';

const FormUpdateDialog = (props) => {
  const { title, visibled, setVisibled = () => {} } = props;

  const handleClose = () => {
    setVisibled(false);
  };

  return (
    <Dialog
      fullWidth
      maxWidth={'lg'}
      open={visibled}
      onClose={handleClose}
      PaperProps={{
        style: {
          top: '-38%'
        }
      }}
    >
      <Typography variant="h3" mt={1} mb={2}>
        {title}
      </Typography>
      <Divider />
      <FormUpdate setVisibleDialog={setVisibled}>{props.children}</FormUpdate>
    </Dialog>
  );
};

export default FormUpdateDialog;
