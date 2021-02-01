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
            <HomeSvg
              className="cursor-pointer stroke-current text-purple-700 dark:text-purple-300 dark:hover:text-light hover:text-dark"
              onClick={() => onClick(place)}
            />
          ) : (
            <PinSvg
              className="text-yellow-700 cursor-pointer stroke-current dark:text-yellow-600 dark:hover:text-light hover:text-dark"
              onClick={() => onClick(place)}
            />
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
