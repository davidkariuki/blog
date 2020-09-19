import React, { FunctionComponent } from "react";
import { Destination } from "../../shared/types";
import { Panel, Content, Title, ImageContainer } from "./styles";

interface PopupProps {
  place: Destination;
}

export const MapPopup: FunctionComponent<PopupProps> = ({ place }) => {
  return (
    <Panel>
      <Content>
        <Title>{place.name}</Title>
        <div>{place.date}</div>
      </Content>
      {place.image && (
        <ImageContainer>
          <img width={240} src={place.image} />
        </ImageContainer>
      )}
    </Panel>
  );
};
