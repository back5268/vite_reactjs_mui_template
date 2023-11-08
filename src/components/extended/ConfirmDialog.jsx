import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useConfirmState } from '@store';

const ConfirmDialog = () => {
  const { confirm, hideConfirm } = useConfirmState();
  const { title, handleConfirm, isOpen } = confirm;

  return (
    isOpen && (
      <Dialog open={isOpen} onClose={hideConfirm}>
        <DialogTitle>Sertech Service</DialogTitle>
        <DialogContent>
          <DialogContentText>{title || 'Bạn có chắc chắn muốn thực hiện hành động này?'}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={hideConfirm} color="primary">
            Hủy
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    )
  );
};

export default ConfirmDialog;
