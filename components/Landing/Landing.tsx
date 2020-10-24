import React, { FC } from "react"
import Link from "next/link"
import { Container, Content, Title, Accent } from "./styles"

export const Landing: FC = () => {
  return (
    <>
      <Container>
        <Title>
          Hello, I'm <Accent>David.</Accent>
        </Title>
        <Content>
          <p>
            I like to code, travel and dance, and this is where I write down my
            thoughts, learnings and life experiences.
          </p>
          <p>
            Thanks for stopping by! While you are here feel free to read more
            about me
            <Link href="/about">
              <a> here</a>
            </Link>
            , see where I'm headed next in my
            <Link href="/travelogue">
              <a> travelogue </a>
            </Link>
            , or read my latest
            <Link href="/scribbles">
              <a> scribbles</a>
            </Link>
            .
          </p>
        </Content>
      </Container>
    </>
  )
}
