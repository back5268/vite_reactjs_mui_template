import { create } from 'zustand';

const initState = {
    severity: '',
    message: '',
}

const useToastState = create((set, get) => ({
    toast: initState,
    isOpen: false,
    duration: 4000,
    setToast: (toast) => set({ toast, isOpen: true, duration: toast.duration || 4000 }),
    hideToast: () => set({ toast: initState, isOpen: false, duration: 4000 }),
}));

const getToastState = () => useToastState.getState();
export { useToastState, getToastState };
