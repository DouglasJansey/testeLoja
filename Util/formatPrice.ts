export function formatPrice(price: number){
    const priceFixed = price.toFixed(0)
    if(priceFixed.length > 3 && priceFixed.length < 5){
        const formatedPrice = JSON.stringify(price).replace(/[\D]/g, '')
        .replace(/(\d{1})(\d)/, '$1.$2')
        const priceFixed = +formatedPrice;
        return priceFixed.toFixed(3)
     }else if(priceFixed.length > 4 && priceFixed.length < 6){
        const formatedPrice = JSON.stringify(price).replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        const priceFixed = +formatedPrice;
        return priceFixed.toFixed(3)
     }
     else{
         return +price
     }
}