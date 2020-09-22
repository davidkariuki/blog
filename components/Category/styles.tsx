import styled from "styled-components"

interface TagProps {
  dark?: boolean
  spaced?: boolean
}

export const Tag = styled.div<TagProps>`
  background: ${(props) =>
    props.dark ? `var(--secondary-color)` : `var(--accent-color)`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-text);
  height: 1.625rem;
  border-radius: 0.1875rem;
  padding: 0 1.2rem;
  margin: ${(props) => props.spaced && "0 0.5rem"};
  cursor: pointer;
  box-shadow: var(--shadow);

  &:hover {
    background-color: var(--accent-color);
  }
`
