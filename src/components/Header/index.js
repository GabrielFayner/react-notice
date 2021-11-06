import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { Container, Title, Search } from "./styles";

function Header({ title, isListOrForm }) {
  return (
    <Container>
      <Title>
        {isListOrForm ? (
          <Link to="/create">
            <Button title="+" kind="isCreate" />
          </Link>
        ) : null}
        <span>{title}</span>
      </Title>
      {isListOrForm ? (
        <Search>
          <input placeholder="Pesquisa de noticia" />
        </Search>
      ) : (
        ""
      )}
    </Container>
  );
}

export default Header;
