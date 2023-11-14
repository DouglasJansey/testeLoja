import { formatPrice } from "../formatPrice";

describe('formatPrice', ()=>{
    it('should return a decimal number like 1.000', () =>{
            expect(formatPrice(9876)).toEqual('9.876');
    })
})
