import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  color: #000;
  width: 25%;
  height: 20%;
  border-radius: 10px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.span`
  font-weight: bold;
  font-size: 22px;
`;
export const Close = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  &:before,
  &:after {
    content: " ";
    position: absolute;
    width: 2.5px;
    height: 20px;
    background-color: #000;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
export const Content = styled.div``;
export const Footer = styled.div``;
