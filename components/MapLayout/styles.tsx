import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: calc(100vh - var(--nav-height));
  margin: auto;
  @media only screen and (max-width: 37rem) {
    flex-direction: column;
  }
`
