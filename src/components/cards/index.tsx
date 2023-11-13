/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import React from 'react';
import {
    PriceContainer, ContainerMiddle, ContainerCard,
    ImageConatainer, NameContainer, IconBag,
    DescContainer, Name, ButtonContainer,
} from './style';

export default function Cards() {
    return (
        <>
            <ContainerCard>
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