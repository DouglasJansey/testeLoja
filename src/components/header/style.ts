import styled from "styled-components";
import {TiShoppingCart} from 'react-icons/ti'


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    background: #0F52BA;
    color: #fff;
`
export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 100%;
    padding: 15px;
    margin-left: 40px;
`
export const NameMKS = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
`;
export const NameSistemas = styled.p`
    font-weight: normal;
    margin-left: 15px;
`;
export const CartContainer = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90px;
    height: 45PX;
    background: #fff;
    color: #000;
    font-weight: bold;
    border-radius: 8px;
    margin-right: 55px;
    border: none;
    cursor: pointer;
    p{
        font-size: 1.3rem;
    }
`;
export const Cart = styled(TiShoppingCart)`
    color: #000;
    font-size: 22px;
    font-weight: 800;
    margin: 10px;
`
export const Modal = styled.div`

`;