import styled from "styled-components";

type Props = {
  width: string;
  height: string;
};
type Visibile = {
  hidden: boolean;
};

export const Container = styled.div<Visibile>`
  display: flex;
  align-items: center;
  visibility: ${(props:{hidden: boolean}) => (props.hidden ? "visible" : "hidden")};
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: auto;
  box-shadow: 0px 0px 10px #2c2c2c;
  max-width: 486px;
  background: #0f52ba;
  z-index: 5;
  top: 0;
  right: 0;
`;
export const CntainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100px;
  padding: 5px;
  position: relative;
  p {
    font-size: 27px;
    width: 50%;
    font-weight: bold;
    color: #fff;
  }
  button {
    position: relative;
  }
`;
export const ContainerCart = styled.div`
  display: flex;
  flex: none;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 98px;
  background: #fff;
  border-radius: 8px;
  position: relative;
  margin: 5px;
`;
export const ImageContainer = styled.div`
  width: 70px;
  height: 75%;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const NameContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #000;
`;
export const QuantityContainer = styled.div`
  width: 15%;
  font-size: 6px;
  height: auto;
  margin-bottom: 20px;
`;
export const ContainerButtonIncrement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18px;
  width: 55px;
  border-radius: 4px;
  box-shadow: 0px 0px 3px #d3d3d3;
  padding: 1px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 0.2px solid #bfbfbf;
    border-right: 0.2px solid #bfbfbf;
    width: 30%;
    height: 70%;
    p {
        color: #000;
        font-weight: bold;
        font-size: .7rem
    }
  }
  button {
    border: none;
    background: none;
    width: auto;
    margin: 5px;
    padding: 0;
    cursor: pointer;
  }
`;
export const PriceContainer = styled.div`
  width: auto;
  height: 17px;
  color: #000;
  font-weight: bold;
  font-size: 0.9rem;
`;
export const ButtonFinish = styled.button`
  width: 100%;
  min-height: 80px;
  border: none;
  color: #fff;
  font-size: 25px;
  background: #000000;
  bottom: 0;
`;
export const ButtonClosed = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props:{width: string}) => props.width};
  height: ${(props:{height: string}) => props.height};
  background: #000;
  border-radius: 100%;
  border: none;
  color: #fff;
  font-weight: bold;
  position: absolute;
  right: -5px;
  top: -5px;
  cursor: pointer;
`;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 650px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(184, 184, 184, 0.4);
    opacity: 0.5;
  }
`;
export const Total = styled.div`
    font-weight: bold;
    font-size: 1.4rem;
`;