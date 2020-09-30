import React, { FunctionComponent, useEffect } from "react"
import { Main, MapContainer } from "./styles"
import { gaInit, gaTrackPageView } from "../../lib/ga"

export const MapLayout: FunctionComponent = ({ children }) => {
  useEffect(() => {
    gaInit()
    gaTrackPageView()
  }, [])

  return (
    <Main>
      <MapContainer>{children}</MapContainer>
    </Main>
  )
}
