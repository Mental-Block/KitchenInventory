import styled, { css } from "styled-components";

export const cssDefaultButton = css`
  cursor: pointer;
  padding: 1em;
  border-radius: 0.3em;
  box-sizing: border-box;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  transition: 300ms ease-in;
  font-weight: 700;
  letter-spacing: 0.75px;
  line-height: 1rem;
  margin: 1rem 0;
  display: inline-block;

  :hover {
    box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  }
`;

const DefaultButton = styled.button`
  ${cssDefaultButton}
`;

export default DefaultButton;
