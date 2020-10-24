import React, { useState, FC, useEffect } from "react"
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
  selectedDestination: Destination
  destinationChanged(d: Destination): void
}

export const Map: FC<MapProps> = ({
  markers,
  selectedDestination,
  destinationChanged,
}) => {
  const apiToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  const [viewport, setViewport] = useState<ViewportProps>({
    width: "100%",
    height: "100%",
    latitude: 45.457582,
    longitude: 0.0,
    zoom: 1.2,
    bearing: 0,
    pitch: 0,
  })

  useEffect(() => {
    const zoom = viewport.zoom > 8 ? viewport.zoom : 8
    const newCoords = {
      latitude: selectedDestination.latitude,
      longitude: selectedDestination.longitude,
      zoom: zoom,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.5 }),
      transitionDuration: "auto",
    }

    setViewport({ ...viewport, ...newCoords } as ViewportProps)
  }, [selectedDestination])

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
