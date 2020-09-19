import styled from "styled-components";

export const Panel = styled.div`
  background: rgba(black, 0.3);
  box-shadow: 0 0 30px 10px rgba(black, 0.3);
`;

export const Content = styled.div`
  background: var(--primary-color);
  padding: 1em;
  text-align: center;
  color: #5a5a5a;
`;
export const Title = styled.div`
  color: var(--light-text);
  text-align: center;
  font-size: 1em;
  font-weight: 700;
`;

export const ImageContainer = styled.div`
  border-top: 1px solid var(--light-text);
`;
