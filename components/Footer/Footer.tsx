import React, { FC } from "react"
import { Container, Copyright } from "./styles"
import { GithubSvg, TwitterSvg, LinkedInSvg } from "../../styles/shared"

export const Footer: FC = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <Container>
        <Copyright>© David Kariuki {year}</Copyright>
        <a href="https://github.com/davidkariuki" target="_blank">
          <GithubSvg />
        </a>
        <a href="https://twitter.com/davidkariuki" target="_blank">
          <TwitterSvg />
        </a>
        <a href="https://www.linkedin.com/in/dkariuki/" target="_blank">
          <LinkedInSvg />
        </a>
      </Container>
    </>
  )
}
