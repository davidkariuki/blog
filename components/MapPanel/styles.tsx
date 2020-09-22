import styled from "styled-components"

export const Panel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 20rem;
  padding: 0.5rem;
  margin: 1rem;
  background: var(--primary-color);
  box-shadow: var(--shadow);
  z-index: 2;
`

export const Title = styled.h3`
  color: var(--accent-color);
  margin: 0;
`

export const Content = styled.div`
  color: var(--regular-text);
`
