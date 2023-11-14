/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useState, useEffect, ReactNode } from 'react'
import dynamic from 'next/dynamic'
import {
    Container, ButtonFinish, ContainerCart, ImageContainer, NameContainer,
    QuantityContainer, PriceContainer, ContainerButtonIncrement, ButtonClosed,
    CntainerTitle, ContainerItens, Total
} from './style';
import { useCart } from '../../../store/cartStore';
import { formatPrice } from '../../../Util/formatPrice';
import CartItem from './cartItem'

type ProductProps = {
    id: number,
    name: string,
    photo: string,
    price: string,
    qtd?: number,
}
export default function Cart() {
    const [cart, openCart, setOpenCart, total, result] = useCart(state => [state.cart, state.openCart, state.setOpenCart, state.total, state.result]);

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
                    {cart.length > 0 ? cart.map((item, i) => (
                        <div key={item.id}>
                            <CartItem prodCart={item} index={i}/>
                        </div>
                    )) :
                        <CntainerTitle>
                            <h5>Ainda não tem nenhum item no carrinho!</h5>
                        </CntainerTitle>
                    }
                </ContainerItens>
                <Total>
                    Valor Total: &nbsp; {formatPrice(total)}
                </Total>
                <ButtonFinish>
                    Finalizar Compra
                </ButtonFinish>
            </Container>
        </>
    )
}