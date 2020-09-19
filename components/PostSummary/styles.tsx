import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  background-color: var(--secondary-color);
  margin-bottom: 1.5rem;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform 0.2s linear;

  &:hover {
    transform: scale(1.01);
    box-shadow: var(--shadow-strong);
  }
`;

export const CardContent = styled.div`
  padding: 24px;
`;

export const PostTitle = styled.h2`
  color: var(--light-text);
  margin: 0;
  line-height: 1.75rem;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;
