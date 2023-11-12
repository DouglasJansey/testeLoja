import { create } from "zustand";

type Item = {
  id: number;
  name: string;
  photo: string;
  price: string;
  qtd: number;
};

type CartType = {
  cart: Item[];
  openCart: boolean;
  addCart: (item: Item) => void;
  removeCart: (id: number) => void;
  setOpenCart: () => void;
};

export const useCart = create<CartType>((set) => ({
  cart: [],
  openCart: false,
  setOpenCart: () => set((state) => ({ openCart: !state.openCart })),
  addCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));
