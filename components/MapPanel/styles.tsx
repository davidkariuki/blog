import styled from "styled-components"

export const Accordion = styled.div`
  height: calc(100vh - var(--nav-height));
  max-width: 25rem;
  min-width: 20rem;
  box-shadow: var(--shadow);
  border-radius: 0.3125rem;
  overflow: auto;
  overscroll-behavior: contain;
  background: var(--secondary-color);
  z-index: 2;
`
export const Label = styled.label`
  padding: 0.875rem 1.25rem;
  display: block;
  color: var(--accent-color);
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: background 0.1s;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1.25rem;
    width: 0.75rem;
    height: 0.375rem;
    background-image: url('data:image/svg+xml;utf8,<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 100,0 50,50" style="fill:%23FFFFFF99;" /></svg>');
    background-size: contain;
    transition: transform 0.4s;
  }
`

export const ImageContainer = styled.div`
  img {
    margin: auto;
  }
`

export const Content = styled.div`
  padding: 0.875rem 1.25rem;
  background: var(--primary-color);
  line-height: 1.6;
  font-size: 0.85em;
  display: none;
`

export const Input = styled.input`
  display: none;

  &:checked ~ ${Content} {
    display: block;
  }

  &:checked ~ ${Label}::after {
    transform: translateY(-50%) rotate(0.5turn);
  }
`
