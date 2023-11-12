import { create } from "zustand";
type PageType = {
    page: number
    Next: () => void
    Back: () => void
}

export const usePages = create<PageType>((set) => ({
    page: 1,
    Next: () => set((state) => ({page: state.page + 1})),
    Back: () => set((state) => ({page: state.page - 1}))
}))