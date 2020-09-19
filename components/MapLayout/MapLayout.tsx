import React, { FunctionComponent } from "react";
import { Main, MapContainer } from "./styles";

export const MapLayout: FunctionComponent = ({ children }) => {
  return (
    <Main>
      <MapContainer>{children}</MapContainer>
    </Main>
  );
};
