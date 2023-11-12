'use client'
import React, { ReactNode, useState } from 'react';
import dynamic from 'next/dynamic';
import {
    Container, LogoContainer, NameMKS,
    NameSistemas, CartContainer, Cart
} from './style';
import { useCart } from '../../../store/cartStore'

const CartModal = dynamic(() => import('@/components/cart'), {ssr: false})

export default function Header() {
    const [cart, openCart, setOpenCart] = useCart(state => [state.cart, state.openCart, state.setOpenCart]);
    const filterRepeat = cart.filter(function (item, i) {
        return cart.indexOf(item) === i;
    });
    const handleOpenCart= () =>{
        setOpenCart()
    }
    return (
        <>
            <Container >
                <LogoContainer>
                    <NameMKS>
                        MKS
                    </NameMKS>
                    <NameSistemas>
                        Sistemas
                    </NameSistemas>
                </LogoContainer>
                <CartContainer onClick={() => handleOpenCart()}>
                    <Cart />
                    <p>
                        {cart.length && filterRepeat.length || 0}
                    </p>
                </CartContainer>
                <CartModal />
            </Container>
        </>
    )
}