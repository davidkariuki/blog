import React, { FunctionComponent } from "react";
import { Place } from "../Places";

interface PopupProps {
  place: Place;
}

export const MapPopup: FunctionComponent<PopupProps> = ({ place }) => {
  return (
    <div>
      <div>
        {name} |{" "}
        <a
          target="_new"
          href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${place.name}`}
        >
          Wikipedia
        </a>
      </div>
      <img width={240} src={place.image} />
    </div>
  );
};
