/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import {
    PriceContainer, ContainerMiddle, ContainerCard,
    ImageConatainer, NameContainer, IconBag,
    DescContainer, Name, ButtonContainer,
} from './style';
import { formatPrice } from '../../../Util/formatPrice';
import { useCart } from '../../../store/cartStore';
import LoadingSkeleton from '../loadingSkeleton';
type ProductType = {
    products: ProductProps,
}

type ProductProps = {
    id: number,
    name: string,
    description: string,
    brand: string,
    photo: string,
    price: string,
    qtd?: number
}

export default function Card({ products }: ProductType) {
    const { name, photo, price, description } = products && products
    const [delay, setDelay] = useState(true);
    const [addCart, cart, result] = useCart(state => [state.addCart, state.cart, state.result])
    const priceFixed = formatPrice(+price)
    const handleAddCart = () => {
        const disableAddCart = cart.some((item) => item.id === products.id);
        if(!disableAddCart){
            addCart({ ...products, qtd: 1 });
            result()
        }
    }
    setTimeout(() => {
        setDelay(false)
    }, 2000)
    return (
        <>{
            delay ? <LoadingSkeleton />
         :   <ContainerCard>
                <ImageConatainer>
                    <img src={photo} alt='' />
                </ImageConatainer>
                <ContainerMiddle>
                    <NameContainer>
                        <Name>{name}</Name>
                    </NameContainer>
                    <PriceContainer>
                        <p>R${priceFixed}</p>
                    </PriceContainer>
                </ContainerMiddle>
                <DescContainer>
                    <Name>{description}</Name>
                </DescContainer>
                <ButtonContainer onClick={() => handleAddCart()}>
                    <IconBag />
                    <p>COMPRAR</p>
                </ButtonContainer>
            </ContainerCard>
        }
        </>
    )
}