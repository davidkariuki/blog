import { FC, useEffect } from "react"
import { Main } from "./styles"
import { gaInit, gaTrackPageView } from "../../lib/ga"

export const MapLayout: FC = ({ children }) => {
  useEffect(() => {
    gaInit()
    gaTrackPageView()
  }, [])

  return <Main>{children}</Main>
}
