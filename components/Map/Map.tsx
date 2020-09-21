import React, { useState, FunctionComponent } from "react"
import ReactMapGL, { Popup, FlyToInterpolator } from "react-map-gl"
import { Places } from "../Places"
import { MapPopup } from "../MapPopup"
import { Destination } from "../../shared/types"

export interface ViewportProps {
  width: number | string
  height: number | string
  latitude: number
  longitude: number
  zoom: number
  bearing?: number
  pitch?: number
  transitionDuration?: number | "auto"
  transitionInterpolator?: FlyToInterpolator
}

interface MapProps {
  markers: Destination[]
}

export const Map: FunctionComponent<MapProps> = ({ markers }) => {
  const apiToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  const [place, setPlace] = useState<Destination>()
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 45.457582,
    longitude: 0.0,
    zoom: 1.2,
    bearing: 0,
    pitch: 0,
  } as ViewportProps)

  const popupClicked = (p: Destination) => {
    setPlace(p)
    const newCoords = {
      latitude: p.latitude,
      longitude: p.longitude,
      zoom: 8,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.5 }),
      transitionDuration: "auto",
    }
    setViewport({ ...viewport, ...newCoords } as ViewportProps)
  }

  const renderPopup = () => {
    if (place) {
      return (
        <Popup
          anchor="top"
          longitude={place.longitude}
          latitude={place.latitude}
          closeOnClick={false}
          onClose={() => setPlace(undefined)}
        >
          <MapPopup place={place} />
        </Popup>
      )
    }
  }

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(v: ViewportProps) => setViewport(v)}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={apiToken}
      dragRotate={false}
    >
      <Places data={markers} onClick={(p) => popupClicked(p)} />
      {renderPopup()}
    </ReactMapGL>
  )
}
