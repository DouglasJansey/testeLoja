'use client'
import React, { useState } from 'react'
import {
    ContainerCart, ImageContainer, NameContainer,
    QuantityContainer, PriceContainer, ContainerButtonIncrement, ButtonClosed,
    ContainerItens
} from './style';
import { useCart } from '../../../../store/cartStore';
import { formatPrice } from '../../../../Util/formatPrice';


type ItemType = {
    prodCart: ProductProps
    index: number
}

type ProductProps = {
    id: number,
    name: string,
    photo: string,
    price: string,
    qtd: number,
}
export default function CartItem({ prodCart, index }: ItemType) {
    const [ removeCart, cart, result] = useCart(state => [state.removeCart, state.cart, state.result]);
    const [quantity, setQuantity] = useState(prodCart.qtd);
    const handleQuantity = (increment: number) => {
        const newQuantity = Math.max(1, quantity + increment);
        setQuantity(newQuantity);
        cart[index] = {...cart[index], qtd: newQuantity};
        // const updatedCart = cart.map((item, i) =>
        //     i === index ? { ...item, qtd: newQuantity } : item
        // );

        // const newTotal = updatedCart.reduce(
        //     (acc, item) => acc + (item.qtd) * +item.price,
        //     0
        // );
        result();
    };
    console.log(cart)
    const removeItem = (id: number) => {
        removeCart(id)
        result()
    }
    return (
        <>
            <ContainerItens>
                <ContainerCart key={prodCart.id}>
                    <ButtonClosed width='18px' height='18px'
                        onClick={() => removeItem(prodCart.id)}>
                        X
                    </ButtonClosed>
                    <ImageContainer>
                        <img src={prodCart.photo} alt='' />
                    </ImageContainer>
                    <NameContainer>
                        {prodCart.name}
                    </NameContainer>
                    <QuantityContainer>
                        <p>
                            Qtd:
                        </p>
                        <ContainerButtonIncrement>
                            <button type="button" onClick={() => handleQuantity(-1)}>
                                -
                            </button>
                            <div>
                                <p>{quantity}</p>
                            </div>
                            <button type="button" onClick={() => handleQuantity(1)}>
                                +
                            </button>
                        </ContainerButtonIncrement>
                    </QuantityContainer>
                    <PriceContainer>
                        {formatPrice(quantity * +prodCart.price)}
                    </PriceContainer>
                </ContainerCart>
            </ContainerItens>

        </>
    )
}