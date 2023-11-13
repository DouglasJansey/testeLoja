import {create} from 'zustand';

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
  total: number;
  addCart: (item: Item) => void;
  removeCart: (id: number) => void;
  setOpenCart: () => void;
  result: () => void

};

export const useCart = create<CartType>((set) => ({
  cart: [],
  openCart: false,
  total: 0,
  addCart: (item) => set((state) => ({ cart: [...state.cart, item], total: state.total + (+item.price)})),
  result: () => set((state) => ({ total: state.cart.map((item) => +item.price * item.qtd).reduce((acc, curr) => acc + curr, 0) })),
  setOpenCart: () => set((state) => ({ openCart: !state.openCart })),
  removeCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  })

);
