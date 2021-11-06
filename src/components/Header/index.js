import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { Container, Title, Search } from "./styles";

function Header({ title, isListOrForm, search, setSearch }) {
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
          <input
            placeholder="Pesquise titulo da noticia"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
      ) : (
        ""
      )}
    </Container>
  );
}

export default Header;
