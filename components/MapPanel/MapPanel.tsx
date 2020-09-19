import React, { FunctionComponent } from "react";
import { Panel, Title, Content } from "./styles";

export const MapPanel: FunctionComponent = () => {
  return (
    <Panel>
      <Title>Destinations</Title>
      <Content>Places I've visited so far</Content>
    </Panel>
  );
};
