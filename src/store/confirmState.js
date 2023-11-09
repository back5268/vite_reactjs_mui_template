import { create } from 'zustand';

const initState = {
  handleConfirm: () => {},
  title: '',
  isOpen: ''
};

const useConfirmState = create((set, get) => ({
  confirm: initState,
  setConfirm: (confirm) => set({ confirm }),
  hideConfirm: () => set({ confirm: initState })
}));

const getConfirmState = () => useConfirmState.getState();
export { useConfirmState, getConfirmState };
