/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import {
    PriceContainer, ContainerMiddle, ContainerCard,
    ImageConatainer, NameContainer, IconBag,
    DescContainer, Name, ButtonContainer,
} from './style';
import { formatPrice } from '../../../Util/formatPrice';
import { useCart } from '../../../store/cartStore';

type ProductType = {
    products: ProductProps
}

type ProductProps = {
    id: number,
    name: string,
    description: string,
    brand: string,
    photo: string,
    price: string,
}
export default function Card({ products }: ProductType) {
    const { name, description, photo, price } = products;
    const [addCart, cart] = useCart((state) => [state.addCart, state.cart])
    const priceFixed = formatPrice(+price)
    const handleAddCart = () => {
        addCart({...products, qtd: 1})
    }
    return (
        <>
            <ContainerCard loading={true}>
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
        </>
    )
}