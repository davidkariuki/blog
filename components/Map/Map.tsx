import React, { useState, FunctionComponent, useEffect } from "react"
import ReactMapGL, { FlyToInterpolator } from "react-map-gl"
import { Places } from "../Places"
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
  destination: Destination
  destinationChanged(d: Destination): void
}

export const Map: FunctionComponent<MapProps> = ({
  markers,
  destination,
  destinationChanged,
}) => {
  const apiToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 45.457582,
    longitude: 0.0,
    zoom: 1.2,
    bearing: 0,
    pitch: 0,
  } as ViewportProps)

  useEffect(() => {
    if (destination) {
      const newCoords = {
        latitude: destination.latitude,
        longitude: destination.longitude,
        zoom: 7,
        transitionInterpolator: new FlyToInterpolator({ speed: 1.5 }),
        transitionDuration: "auto",
      }

      setViewport({ ...viewport, ...newCoords } as ViewportProps)
    }
  }, [destination])

  const markerClicked = (d: Destination) => destinationChanged(d)

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(v: ViewportProps) => setViewport(v)}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={apiToken}
      dragRotate={false}
    >
      <Places data={markers} onClick={(d) => markerClicked(d)} />
    </ReactMapGL>
  )
}
