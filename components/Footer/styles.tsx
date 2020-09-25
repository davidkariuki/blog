import styled from "styled-components"
import { css } from "styled-components"
import gh from "../../public/images/github.svg"
import tw from "../../public/images/twitter.svg"
import lin from "../../public/images/linkedin.svg"

const svg = css`
  fill: var(--light-text);
  width: 1rem;
  margin: 0 1rem;
  height: 1rem;
  &:hover {
    fill: var(--accent-color);
  }
`
export const Container = styled.footer`
  display: flex;
  padding: var(--desktop-padding);
  @media only screen and (max-width: 37rem) {
    padding: var(--mobile-padding);
  }
  min-height: var(--nav-height);
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.54);
  background-color: var(--primary-color);
`

export const Copyright = styled.div`
  font-size: 0.8rem;
  margin-right: auto;
`

export const Github = styled(gh)`
  ${svg}
`

export const Twitter = styled(tw)`
  ${svg}
`

export const LinkedIn = styled(lin)`
  ${svg}
`
