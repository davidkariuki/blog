import { FC } from "react"
import { Marker } from "react-map-gl"
import { Destination } from "../../shared/types"
import HomeSvg from "../../public/images/home.svg"
import PinSvg from "../../public/images/map-pin.svg"

export interface PlacesProps {
  data: Destination[]
  onClick(place: Destination): void
}

export const Places: FC<PlacesProps> = ({ data, onClick }) => {
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
