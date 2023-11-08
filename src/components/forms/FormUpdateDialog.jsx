import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Divider, Slide, Typography } from '@mui/material';
import FormUpdate from './FormUpdate';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const FormUpdateDialog = (props) => {
  const { title, visibled, setVisibled = () => {} } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setVisibled(false);
  };

  return (
    <Dialog
      fullWidth
      maxWidth={'lg'}
      open={visibled}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
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
