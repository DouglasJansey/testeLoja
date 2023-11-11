/* eslint-disable @next/next/no-img-element */
'use client'
import {
    PriceContainer, ContainerMiddle, ContainerCard,
    ImageConatainer, NameContainer, IconBag,
    DescContainer, Name, ButtonContainer
} from './style';
import { montserrat } from '../../../style/variables';

export default function Header() {
    return (
        <>
            <ContainerCard className={montserrat.className}>
                <ImageConatainer>
                    <img src='https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/ousyshoe/catalog/relogio/design-sem-nome-37.png' alt='' />
                </ImageConatainer>
                <ContainerMiddle>
                    <NameContainer>
                        <Name>Apple Watch series 4 GPS</Name>
                    </NameContainer>
                    <PriceContainer>
                        <p>R$399</p>
                    </PriceContainer>
                </ContainerMiddle>
                <DescContainer>
                    <Name>Redesigned from scratch and completely revised.</Name>
                </DescContainer>
                <ButtonContainer>
                    <IconBag/>
                    <p className={montserrat.className}>COMPRAR</p>
                </ButtonContainer>
            </ContainerCard>
        </>
    )
}