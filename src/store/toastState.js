import { create } from 'zustand';

const initState = {
  severity: '',
  message: ''
};

const useToastState = create((set, get) => ({
  toastInfo: initState,
  isOpen: false,
  duration: 4000,
  setToast: (toastInfo) => set({ toastInfo, isOpen: true, duration: toastInfo.duration || 4000 }),
  hideToast: () => set({ toast: initState, isOpen: false, duration: 4000 })
}));

const getToastState = () => useToastState.getState();
export { useToastState, getToastState };
