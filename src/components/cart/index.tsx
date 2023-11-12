'use client'
import React, { useState, useEffect, ReactNode } from 'react'
import {
    Container, ButtonFinish, ContainerCart, ImageContainer, NameContainer,
    QuantityContainer, PriceContainer, ContainerButtonIncrement, ButtonClosed,
    CntainerTitle, ContainerItens, Total
} from './style';
import { useCart } from '../../../store/cartStore';
import { formatPrice } from '../../../Util/formatPrice';

type ProductProps = {
    id: number,
    name: string,
    photo: string,
    price: string,
    qtd: number,
}
export default function Cart() {
    const [cart, removeCart, openCart, setOpenCart] = useCart(state => [state.cart, state.removeCart, state.openCart, state.setOpenCart]);
    const [quantity, setQuantity]: any = useState(1)
    const [valorTotal, setValorTotal] = useState(0)
    //const reduceValue = cart.map((item) => +item.price).reduce((acc, curr) => +acc + +curr, 0);

    const removeRepeat = cart.filter(function (item, i) {
        return cart.indexOf(item) === i;
    });
    const handleQuantity = (e: any, index: number) => {
        const { innerText } = e.target;
        const currentCard = cart[index];
        if (currentCard.qtd > 1 && innerText === '-') {
            currentCard.qtd = currentCard.qtd - 1;
        } else if (currentCard.qtd >= 1 && innerText === '+') {
            currentCard.qtd = currentCard.qtd + 1;
        }
        setQuantity(currentCard.qtd)
    }
    const cartTotal = (cart: ProductProps[]): any | ReactNode =>{
       const subTotal = cart.map((item: ProductProps) => item.qtd * +item.price)
       const total = subTotal.reduce((acc, curr) => acc + curr, 0)
        return formatPrice(total);
    }
    const closeCartModal = () => {
        setOpenCart()
    }

    return (
        <>
            <Container hidden={openCart}>
                <CntainerTitle>
                    <p>
                        Carrinho <br />
                        de compras
                    </p>
                    <ButtonClosed width='38px' height='38px' onClick={() => closeCartModal()}>
                        X
                    </ButtonClosed>
                </CntainerTitle>
                <ContainerItens>
                    {cart.length > 0 ? removeRepeat.map((item, index) => (
                        <>
                            <ContainerCart key={item.id}>
                                <ButtonClosed width='18px' height='18px'
                                    onClick={() => removeCart(item.id)}>
                                    X
                                </ButtonClosed>
                                <ImageContainer>
                                    <img src={item.photo} alt='' />
                                </ImageContainer>
                                <NameContainer>
                                    {item.name}
                                </NameContainer>
                                <QuantityContainer>
                                    <p>
                                        Qtd:
                                    </p>
                                    <ContainerButtonIncrement>
                                        <button onClick={(e) => handleQuantity(e, index)}>-</button>
                                        <div>
                                            <p>
                                                {item.qtd}
                                            </p>
                                        </div>
                                        <button onClick={(e) => handleQuantity(e, index)}>+</button>
                                    </ContainerButtonIncrement>
                                </QuantityContainer>
                                <PriceContainer>
                                    {formatPrice(item.qtd * +item.price)}
                                </PriceContainer>
                            </ContainerCart>
                        </>
                    )) :
                        <CntainerTitle>
                            <h5>Ainda não tem nenhum item no carrinho!</h5>
                        </CntainerTitle>
                    }
                </ContainerItens>
                <Total>
                    Valor Total: &nbsp; {cartTotal(cart)}
                </Total>
                <ButtonFinish>
                    Finalizar Compra
                </ButtonFinish>
            </Container>
        </>
    )
}