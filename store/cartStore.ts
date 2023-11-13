import {create} from 'zustand';

type Item = {
  id: number;
  name: string;
  photo: string;
  price: string;
  qtd?: number;
};

type CartType = {
  cart: Item[];
  openCart: boolean;
  total: number;
  addCart: (item: Item) => void;
  removeCart: (id: number) => void;
  setOpenCart: () => void;
  setTotal: () => void;

};

export const useCart = create<CartType>((set) => ({
  cart: [],
  openCart: false,
  total: 0,
  setTotal: () => set((state) => ({ total: state.cart
    .filter((item, index) => state.cart.indexOf(item) === index)
    .map(item => {
    if(item.qtd){
      return item.qtd * +item.price
    }else{
      return +item.price * 1
    }
  })
  .reduce((acc, curr) => acc + curr)
})),
  setOpenCart: () => set((state) => ({ openCart: !state.openCart })),
  addCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  })

);
