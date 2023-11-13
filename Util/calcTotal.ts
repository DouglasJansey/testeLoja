import { formatPrice } from "./formatPrice";
export default function CalcTotal(cart: any[]) {
  const total = cart
    .map((item) => {
      if (item.qtd) {
        return +item.price * item.qtd;
      } else {
        return +item.price;
      }
    })
    .reduce((acc, curr) => acc + curr, 0);
  const result: any = formatPrice(total);
  return result;
}
