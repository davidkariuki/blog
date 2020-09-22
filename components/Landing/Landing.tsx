import React, { FunctionComponent } from "react"
import { Container, Content, Title, Accent } from "./styles"

export const Landing: FunctionComponent = () => {
  return (
    <>
      <Container>
        <Title>
          Hello, I'm <Accent>David.</Accent>
        </Title>
        <Content>
          I'm a software engineer interested in all things web and currently
          living in London. I like to code, travel and dance, and this is where
          I write down my thoughts, code snippets and life experiences.
        </Content>
      </Container>
    </>
  )
}
