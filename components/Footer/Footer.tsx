import React, { FunctionComponent } from "react"
import { Container, Copyright, Github, Twitter, LinkedIn } from "./styles"

export const Footer: FunctionComponent = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <Container>
        <Copyright>© David Kariuki {year}</Copyright>
        <a href="https://github.com/davidkariuki" target="_blank">
          <Github />
        </a>
        <a href="https://twitter.com/davidkariuki" target="_blank">
          <Twitter />
        </a>
        <a href="https://www.linkedin.com/in/dkariuki/" target="_blank">
          <LinkedIn />
        </a>
      </Container>
    </>
  )
}
