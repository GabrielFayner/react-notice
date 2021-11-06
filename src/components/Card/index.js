import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Modal from "../Modal";

import { Container, Header, Content, Footer } from "./styles";
import Button from "../Button";

function Card({ title, author, post, id, getNotices, data, setData }) {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    await api.delete(`notice/${id}`);
    setOpen(false);
    getNotices();
    setData(data);
  };

  return (
    <Container>
      <Header>
        <h4> {title}</h4>
        <span>autor: {author}</span>
      </Header>
      <Content>{post}</Content>
      <Footer>
        <Link to={`/edit/${id}`}>
          <Button title="Editar" kind="isEdit" />
        </Link>
        <Button title="Deletar" kind="isDelete" click={() => setOpen(true)} />
      </Footer>
      {open ? (
        <Modal handleClose={() => setOpen(false)} onDelete={handleDelete}>
          Deseja realmente excluir?
        </Modal>
      ) : null}
    </Container>
  );
}

export default Card;
