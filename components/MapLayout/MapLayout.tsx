import { FC, useEffect } from "react"
import { gaInit, gaTrackPageView } from "../../lib/ga"

export const MapLayout: FC = ({ children }) => {
  useEffect(() => {
    gaInit()
    gaTrackPageView()
  }, [])

  return <div>{children}</div>
}
