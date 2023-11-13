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
    qtd?: number,
}
export default function CartItem({ prodCart, index }: ItemType) {
    const [removeCart, cart, setTotal] = useCart(state => [state.removeCart, state.cart, state.setTotal]);

    const [quantity, setQuantity]: any = useState(1)
    const handleQuantity = (e: any) =>{
        e.preventDefault()
        const {innerText} = e.target;
        if(innerText === '+'){
            setQuantity(quantity + 1)
            !cart[index].qtd ? cart[index] = {...cart[index], qtd: 2} : cart[index].qtd  = cart[index].qtd! + 1;
        }else{
            if(quantity > 1){
                setQuantity(quantity - 1)
                !cart[index].qtd ? '' : cart[index].qtd  = cart[index].qtd! - 1;
            }
        }
        setTotal()
    }
    const removeItem = (id: number) =>{
        removeCart(id)
        setTotal()
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
                            <button type='button' onClick={(e) => handleQuantity(e)}>-</button>
                            <div>
                                <p>
                                    {quantity}
                                </p>
                            </div>
                            <button type='button' onClick={(e) => handleQuantity(e)}>+</button>
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