import styled, { css } from "styled-components"
import hm from "../../public/images/home.svg"
import pin from "../../public/images/map-pin.svg"

const svg = css`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  fill: var(--accent-color);
  stroke: var(--primary-color);
  stroke-width: 1;
  &:hover {
    stroke: var(--accent-color);
    fill: var(--primary-color);
  }
`
export const HomeSvg = styled(hm)`
  ${svg}
  fill: var(--secondary-accent-color);
  &:hover {
    stroke: var(--secondary-accent-color);
  }
`
export const PinSvg = styled(pin)`
  ${svg}
`
