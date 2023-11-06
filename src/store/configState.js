import config from "@config";
import { create } from "zustand";

const useConfigState = create((set, get) => ({
    isOpen: [],
    defaultId: 'default',
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true,
    setIsOpen: (isOpen) => set({ isOpen: [isOpen] }),
    setDefaultId: (defaultId) => set({ defaultId }),
    setFontFamily: (fontFamily) => set({ fontFamily }),
    setBorderRadius: (borderRadius) => set({ borderRadius }),
    setOpened: (opened) => set({ opened }),
}));

const getConfigState = () => useConfigState.getState();
export {
    useConfigState,
    getConfigState
};
