import styled from "styled-components"

export const Container = styled.div`
  height: calc(100vh - (var(--nav-height) * 2));
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Accent = styled.span`
  color: var(--accent-color);
`

export const Title = styled.h1`
  margin-top: 0;
  font-weight: 700;
`

export const Content = styled.div``
