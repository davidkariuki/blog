import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: var(--desktop-padding);
  @media only screen and (max-width: 37rem) {
    padding: var(--mobile-padding);
  }
`;
