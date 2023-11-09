import { useToastState } from '@store';
import React, { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
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
