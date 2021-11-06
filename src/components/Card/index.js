import React from "react";
import { Link } from "react-router-dom";

import { Container, Header, Content, Footer } from "./styles";
import Button from "../Button";

function Card({ title, post, id }) {
  return (
    <Container>
      <Header>{title}</Header>
      <Content>{post}</Content>
      <Footer>
        <Link to={`/edit/${id}`}>
          <Button title="Editar" kind="isEdit" />
        </Link>
        <Button title="Deletar" kind="isDelete" />
      </Footer>
    </Container>
  );
}

export default Card;
