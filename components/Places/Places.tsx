import React, { FunctionComponent } from "react"
import { Marker } from "react-map-gl"
import { Destination } from "../../shared/types"
import { HomeSvg, PinSvg } from "./styles"

export interface PlacesProps {
  data: Destination[]
  onClick(place: Destination): void
}

export const Places: FunctionComponent<PlacesProps> = ({ data, onClick }) => {
  return (
    <>
      {data.map((place: Destination) => {
        const markerSvg =
          place.home === true ? (
            <HomeSvg onClick={() => onClick(place)} />
          ) : (
            <PinSvg onClick={() => onClick(place)} />
          )

        return (
          <Marker
            key={`marker-${place.id}`}
            longitude={place.longitude}
            latitude={place.latitude}
          >
            {markerSvg}
          </Marker>
        )
      })}
    </>
  )
}
