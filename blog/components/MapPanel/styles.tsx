import styled from "styled-components";

export const Panel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 20rem;
  padding: 1rem;
  margin: 1rem;
  background: var(--primary-color);
  box-shadow: var(--shadow);
  z-index: 2;
`;

export const Title = styled.h3`
  color: var(--accent-text);
  margin-top: 0;
  margin-bottom: 1rem;
`;
