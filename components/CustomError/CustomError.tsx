import React, { FC } from "react"
import { Container, Code, Message } from "./styles"

interface CustomErrorProps {
  code: number
  message: string
}

export const CustomError: FC<CustomErrorProps> = ({ code, message }) => {
  return (
    <>
      <Container>
        <Code>{code}</Code>
        <Message>{message}</Message>
      </Container>
    </>
  )
}
