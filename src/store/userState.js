import { create } from 'zustand';

const useUserState = create((set, get) => ({
  userInfo: {},
  token: null,
  setUserInfo: ({ userInfo, token }) => set({ userInfo, token }),
  clearUserInfo: () => set({ userInfo: null, token: null })
}));

const getUserState = () => useUserState.getState();
export { useUserState, getUserState };
