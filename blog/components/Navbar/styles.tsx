import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  background-color: #1c1c1e;
  box-shadow: rgb(0, 0, 0) 0px 0px 8px 0px;
  z-index: 2;
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.25rem 15.6%;

  @media only screen and (max-width: 37rem) {
    padding: 1.25rem 4%;
  }
`;

interface NavbarLinkProps {
  brand?: boolean;
}

export const NavbarLink = styled.div<NavbarLinkProps>`
  padding: 0 1rem;
  cursor: pointer;
  font-weight: ${(props) => (props.brand ? 700 : 400)};
  font-size: ${(props) => (props.brand ? "1.5rem" : "1rem")};
  color: ${(props) => (props.brand ? "#ff7601" : "#8b8b8b")};
  margin-right: ${(props) => (props.brand ? "auto" : 0)};
  line-height: 1;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;
