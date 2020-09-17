import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  background-color: #282c34;
  margin-bottom: 24px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(28, 28, 30, 0.1);
  transition: transform 0.2s linear;

  &:hover {
    transform: scale(1.01);
    box-shadow: rgb(0, 0, 0) 0px 0px 8px 0px;
  }
`;

export const CardContent = styled.div`
  padding: 24px;
`;

export const PostTitle = styled.h2`
  color: #bcbcbc;
  margin: 0;
  line-height: 28px;
  font-size: 24px;
  font-weight: 400;
`;
