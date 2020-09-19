import React, { FunctionComponent } from "react";
import { Panel, Title } from "./styles";

export const MapPanel: FunctionComponent = () => {
  return (
    <Panel>
      <Title>Destinations</Title>
      <p>Places I've visited so far</p>
    </Panel>
  );
};
