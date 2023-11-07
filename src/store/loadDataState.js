import { create } from 'zustand';

export const useLoadDataState = create((set, get) => ({
  loadData: true,
  setLoadData: (loadData) => set({ loadData })
}));
