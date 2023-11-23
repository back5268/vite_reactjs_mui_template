import { useTheme } from '@mui/material';
import { useToastState } from '@store';
import React, { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
  const theme = useTheme();
  const { isOpen, toastInfo, duration, hideToast } = useToastState();
  let options = {};

  switch (toastInfo.severity) {
    case 'success':
      options = {
        style: {
          background: theme.palette.success.dark,
          color: '#fff'
        },
        progressStyle: {
          background: theme.palette.success.light,
        }
      };
      break;
    case 'warning':
      options = {
        style: {
          background: theme.palette.warning.dark,
          color: '#fff'
        },
        progressStyle: {
          background: theme.palette.warning.light,
        }
      };
      break;
    default:
      break;
  }

  const notify = () =>
    toast[toastInfo.severity](toastInfo.message, { ...options });

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
