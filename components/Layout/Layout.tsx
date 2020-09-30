import React, { FunctionComponent, useEffect } from "react"
import { Container, Main } from "./styles"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { gaInit, gaTrackPageView } from "../../lib/ga"

export const Layout: FunctionComponent = ({ children }) => {
  useEffect(() => {
    gaInit()
    gaTrackPageView()
  }, [])

  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}
