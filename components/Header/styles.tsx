import styled from "styled-components"

export const NavbarContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--nav-height);
  padding: var(--desktop-padding);
  @media only screen and (max-width: 37rem) {
    padding: var(--mobile-padding);
  }
  background-color: var(--primary-color);
  box-shadow: var(--shadow-strong);
  z-index: 2;
`

interface NavbarLinkProps {
  brand?: boolean
}

export const NavbarLink = styled.div<NavbarLinkProps>`
  padding: 0 1rem;
  cursor: pointer;
  font-weight: 700;
  font-size: ${(props) => (props.brand ? "1.5rem" : "1rem")};
  color: ${(props) =>
    props.brand ? "var(--accent-text)" : "var(--light-text)"};
  margin-right: ${(props) => (props.brand ? "auto" : 0)};
  line-height: 1;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`
