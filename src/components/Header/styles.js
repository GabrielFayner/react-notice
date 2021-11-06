import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding: 20px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Search = styled.div`
  input {
    margin-left: 5px;
    border-radius: 4px;
  }
`;
