import { create } from "zustand"

type MobileNavbarStore = {
    isOpened: boolean
    setIsOpened: (isOpened: boolean) => void
}

export const useMobileNavbarStore = create<MobileNavbarStore>((set) => ({
    isOpened: false,
    setIsOpened: (isOpened) => set({ isOpened }),
}))
