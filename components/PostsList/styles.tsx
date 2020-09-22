import styled from "styled-components"

export const Content = styled.div`
  padding: 1.5rem 0;
  margin: 0 auto;
`
export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  background-color: var(--secondary-color);
  margin-bottom: 1.5rem;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform 0.2s linear;
  padding: 1em;

  &:hover {
    transform: scale(1.01);
    box-shadow: var(--shadow-strong);
  }

  @media only screen and (max-width: 37rem) {
    flex-direction: column;
  }
`

export const CardContent = styled.div``

export const PostTitle = styled.h2`
  color: var(--light-text);
  margin: 0;
  line-height: 1.75rem;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`

export const DateTag = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (max-width: 37rem) {
    flex-direction: row-reverse;
  }
`

export const Description = styled.p``

export const TagsList = styled.div`
  display: flex;
  align-items: column;
  justify-content: center;
  margin-bottom: 1.5rem;
`
