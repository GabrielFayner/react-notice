import React from "react";
import Header from "../Header";

import { Container } from "./styles";

function Layout({ children, title, isSearch }) {
  return (
    <Container>
      <Header title={title} isSearch={isSearch} />
      {children}
    </Container>
  );
}

export default Layout;
