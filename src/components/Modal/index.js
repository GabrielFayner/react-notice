import React from "react";
import Button from "../Button";

import {
  ModalContainer,
  Container,
  Header,
  Title,
  Close,
  Content,
  Footer,
} from "./styles";

function Modal({ id = "modal", handleClose, children, onDelete }) {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) handleClose();
  };

  return (
    <ModalContainer id="modal" onClick={handleOutsideClick}>
      <Container>
        <Header>
          <Title>Alerta</Title>
          <Close onClick={handleClose} />
        </Header>
        <Content>{children}</Content>
        <Footer>
          <Button title="Deletar" kind="isDelete" click={onDelete} />
        </Footer>
      </Container>
    </ModalContainer>
  );
}

export default Modal;
