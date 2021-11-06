import React from "react";
import { Container, Search } from "./styles";

function Header({ title, isSearch }) {
  return (
    <Container>
      {title}

      {isSearch ? (
        <Search>
          <input placeholder="Pesquise pelo autor" />
        </Search>
      ) : (
        ""
      )}
    </Container>
  );
}

export default Header;
