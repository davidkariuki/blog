import React, { FunctionComponent } from "react";
import { Container, Main } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
