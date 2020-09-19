import React, { FunctionComponent } from "react";
import { Main, MapContainer } from "./styles";
import { Map } from "../Map";

export const Trips: FunctionComponent = () => {
  return (
    <Main>
      <MapContainer>
        <Map />
      </MapContainer>
    </Main>
  );
};
