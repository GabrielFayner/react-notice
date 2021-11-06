import React from "react";
import Header from "../Header";

import { Container } from "./styles";

function Layout({ children, title, isListOrForm, search, setSearch }) {
  return (
    <Container>
      <Header
        title={title}
        isListOrForm={isListOrForm}
        search={search}
        setSearch={setSearch}
      />
      {children}
    </Container>
  );
}

export default Layout;
