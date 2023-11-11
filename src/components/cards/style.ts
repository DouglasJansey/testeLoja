import styled from "styled-components";
import {FiShoppingBag} from 'react-icons/fi';

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 217.56px;
  height: 285px;
  border-radius: 10px;
  margin: 25px;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px #d4d4d4;
  overflow: hidden;
`;
export const ImageConatainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52%;
  padding: 5px;
  img {
    height: 100%;
  }
`;
export const PriceContainer = styled.div`
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 10px;
  color: #fff;
  background: #373737;
  p{
    margin: 0;
    font-size: 1rem;
  }
`;
export const ContainerMiddle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 45px;
`;
export const NameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  width: 60%;
  height: 100%;
  padding: 0;
`;
export const Name = styled.p`
  width: auto;
  height: auto;
  margin: 0px 0px 0px 10px;
  padding: 0;
`;
export const DescContainer = styled.div`
  display: flex;
  height: 45px;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 10px;
  margin-left: 5px;
`;
export const IconBag = styled(FiShoppingBag)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  margin-bottom: 1px;
`; 
export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12%;
  text-align: center;
  background: #0f52ba;
  color: #fff;
  border: none;
  p{
    font-weight: bold;
  }
`;

