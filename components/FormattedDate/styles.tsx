import styled from "styled-components";

interface DateProps {
  textCenter?: boolean;
}

export const PostDate = styled.div<DateProps>`
  color: var(--regular-text);
  text-align: ${(props) => (props.textCenter ? "center" : "")};
`;
