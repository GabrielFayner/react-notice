import styled from "styled-components";

export const ButtonCustom = styled.button`
  cursor: pointer;
  border: ${(props) => (!props.kind ? "1px solid #d9d9d9" : "none")};
  border-radius: 4px;
  padding: 10px;
  color: ${(props) => (!props.kind ? "#424242" : "#fff")};
  font-weight: bold;
  background-color: ${(props) =>
    props.kind === "isCreate"
      ? "#00c764"
      : props.kind === "isEdit"
      ? "#1890ff"
      : props.kind === "isDelete"
      ? "red"
      : "transparent"};
`;
