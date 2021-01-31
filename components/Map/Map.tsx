import { useState, FC, useEffect } from "react"
import ReactMapGL, { FlyToInterpolator } from "react-map-gl"
import { Places } from "../Places"
import { Destination } from "../../shared/types"
import { useTheme } from "next-themes"

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
  const { theme } = useTheme()
  const apiToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  const [mounted, setMounted] = useState(false)
  const [viewport, setViewport] = useState<ViewportProps>({
    width: "100%",
    height: "100%",
    latitude: 45.457582,
    longitude: 0.0,
    zoom: 1.2,
    bearing: 0,
    pitch: 0,
  })

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (selectedDestination) {
      const zoom = viewport.zoom > 8 ? viewport.zoom : 8
      const newCoords = {
        latitude: selectedDestination.latitude,
        longitude: selectedDestination.longitude,
        zoom: zoom,
        transitionInterpolator: new FlyToInterpolator({ speed: 1.5 }),
        transitionDuration: "auto",
      }

      setViewport({ ...viewport, ...newCoords } as ViewportProps)
    }
  }, [selectedDestination])

  const markerClicked = (d: Destination) => destinationChanged(d)

  return (
    <div className="w-full md:w-3/4 h-1/2 md:h-full">
      <ReactMapGL
        {...viewport}
        onViewportChange={(v: ViewportProps) => setViewport(v)}
        mapStyle={
          mounted && theme === "dark"
            ? "mapbox://styles/mapbox/dark-v10"
            : "mapbox://styles/mapbox/light-v10"
        }
        mapboxApiAccessToken={apiToken}
        dragRotate={false}
      >
        <Places data={markers} onClick={(d) => markerClicked(d)} />
      </ReactMapGL>
    </div>
  )
}
