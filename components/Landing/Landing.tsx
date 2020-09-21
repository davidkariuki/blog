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
          I'm a software developer interested in all things web. I'm currently
          working on a Rails + React + Angular stack.
        </Content>
      </Container>
    </>
  )
}
