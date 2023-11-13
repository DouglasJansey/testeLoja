import styled, { keyframes, css } from "styled-components";

import { FiShoppingBag } from "react-icons/fi";

const skeletonAnimation = keyframes`
  to{
    background-color: hsl(200,20%, 70%)
  }
  from{
    background-color: hsl(200,20%, 95%)

  }
`;

export const ContainerCard = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  width: 217.56px;
  height: 285px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px #d4d4d4;
  background: #fff;
  margin: 10px;
  overflow: hidden;
  position: relative;
`;
export const ImageConatainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52%;
  margin: 5px;
  position: relative;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  img {
    height: 100%;
  }
`;
export const PriceContainer = styled.div`
  font-weight: bold;
  border-radius: 5px;
  width: 38%;
  height: 35px;
  color: #fff;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  position: relative;

  p {
    margin: 0;
    font-size: .9rem;
  }
`;
export const ContainerMiddle = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0px 5px 0px 5px;
`;
export const NameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  width: 60%;
  height: 80%;
  padding: 0;
  position: relative;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
`;
export const Name = styled.p`
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
`;
export const DescContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  flex-wrap: wrap;
  width: auto;
  color: #2c2c2c;
  font-size: 60%;
  margin: 5px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  position: relative;
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
  height: 10%;
  text-align: center;
  background: #0f52ba;
  color: #fff;
  border: none;
  cursor: pointer;
  p {
    font-weight: bold;
  }
`;
