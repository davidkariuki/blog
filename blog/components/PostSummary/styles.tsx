import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  background-color: #282c34;
  margin-bottom: 24px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    //transform: scale(1.01);
    box-shadow: rgb(0, 0, 0) 0px 0px 8px 0px;
  }
`;

export const CardContent = styled.div`
  padding: 24px;
`;

export const PostDate = styled.div`
  color: #6c757d;
`;

export const PostTitle = styled.h2`
  color: #bcbcbc;
  margin: 0;
  font-size: 24px;
  line-height: 28px;
`;
