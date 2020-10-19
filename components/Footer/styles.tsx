import styled from "styled-components"

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
