import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Slide } from '@mui/material';
import FormUpdate from './FormUpdate';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const FormUpdateDialog = (props) => {
  const { visibled, setVisibled = () => {}, ...prop } = props;

  const handleClose = (event, reason) => {
    if (reason === 'backdropCClick') {
      return;
    }
    setVisibled(false);
  };

  return (
    <Dialog
      fullWidth
      maxWidth={'lg'}
      open={Boolean(visibled)}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      PaperProps={{
        style: {}
      }}
    >
      <FormUpdate setVisibleDialog={setVisibled} {...prop}>
        {props.children}
      </FormUpdate>
    </Dialog>
  );
};

export default FormUpdateDialog;
