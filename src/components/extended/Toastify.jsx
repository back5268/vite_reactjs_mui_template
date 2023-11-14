import { useTheme } from '@mui/material';
import { useToastState } from '@store';
import React, { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
  const theme = useTheme();

  // const customTheme = {
  //   success: {
  //     style: {
  //       background: theme.palette.success.dark,
  //       color: '#fff'
  //     },
  //     progressStyle: {
  //       background: theme.palette.success.light
  //     }
  //   }
  // };

  const { isOpen, toastInfo, duration, hideToast } = useToastState();
  const notify = () => toast[toastInfo.severity](toastInfo.message);

  useEffect(() => {
    if (isOpen && toastInfo.severity && toastInfo.message) {
      notify();
      hideToast();
    }
  }, [isOpen]);

  return (
    <div>
      <ToastContainer theme="colored" autoClose={duration} />
    </div>
  );
};

export default Toastify;