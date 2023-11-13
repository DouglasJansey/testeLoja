/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import {
    PriceContainer, ContainerMiddle, ContainerCard,
    ImageConatainer, NameContainer, IconBag,
    DescContainer, ButtonContainer,
} from './style';

export default function LoadingSkeleton() {


    return (
        <>
            <ContainerCard>
                <ImageConatainer>

                </ImageConatainer>
                <ContainerMiddle>
                    <NameContainer>

                    </NameContainer>
                    <PriceContainer>

                    </PriceContainer>
                </ContainerMiddle>
                <DescContainer>

                </DescContainer>
                <ButtonContainer>
                    <IconBag />
                    <p>COMPRAR</p>
                </ButtonContainer>
            </ContainerCard>
        </>
    )
}