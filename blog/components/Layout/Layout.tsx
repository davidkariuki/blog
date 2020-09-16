import React, { FunctionComponent } from "react";
import { Container } from "./styles";
import { Navbar } from "../Navbar";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};
