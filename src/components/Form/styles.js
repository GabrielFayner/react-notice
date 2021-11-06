import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  margin: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

export const ContainerInputs = styled.div`
  flex: 1;
  margin-bottom: 20px;
`;
export const ContainerTextArea = styled.div`
  margin-bottom: 20px;
  flex-direction: column;
`;
export const Footer = styled.div`
  padding: 20px;
  button:nth-child(2n + 1) {
    margin-right: 10px;
  }
`;

const Heading = keyframes`
  0% { top: -3.125em; }
  100% { top: 1em;}
`;

export const Mensage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${Heading};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
  }
`;
