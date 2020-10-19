import styled, { css } from "styled-components"
import gh from "../public/images/github.svg"
import tw from "../public/images/twitter.svg"
import li from "../public/images/linkedin.svg"

const svg = css`
  fill: var(--light-text);
  width: 1rem;
  margin: 0 1rem;
  height: 1rem;
  &:hover {
    fill: var(--accent-color);
  }
`
export const GithubSvg = styled(gh)`
  ${svg}
`

export const TwitterSvg = styled(tw)`
  ${svg}
`

export const LinkedInSvg = styled(li)`
  ${svg}
`

// ------------ end svg imports -----------------

export const Article = styled.article`
  margin-top: 2rem;
  li {
    margin-bottom: 0.5rem;
  }
`
