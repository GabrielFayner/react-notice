import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  margin: 20px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #fafafa;
  padding: 20px;
`;
export const Content = styled.div`
  padding: 20px;
`;
export const Footer = styled.div`
  padding: 20px;
  button:nth-child(2n + 1) {
    margin-right: 10px;
  }
`;
