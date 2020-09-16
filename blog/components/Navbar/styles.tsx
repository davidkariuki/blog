import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  background-color: #1c1c1e;
  box-shadow: rgb(0, 0, 0) 0px 0px 8px 0px;
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 17%;

  @media only screen and (max-width: 600px) {
    padding: 20px 4%;
  }
`;

interface NavbarLinkProps {
  brand?: boolean;
}

export const NavbarLink = styled.div<NavbarLinkProps>`
  padding: 0 15px;
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  color: ${(props) => (props.brand ? "#ff7601" : "#8b8b8b")};
  margin-right: ${(props) => (props.brand ? "auto" : 0)};

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;
