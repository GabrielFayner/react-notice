import React from "react";
import Header from "../Header";

import { Container } from "./styles";

function Layout({ children, title, isListOrForm }) {
  return (
    <Container>
      <Header title={title} isListOrForm={isListOrForm} />
      {children}
    </Container>
  );
}

export default Layout;
