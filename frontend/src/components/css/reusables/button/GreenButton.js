import styled, { css } from "styled-components";

import { cssDefaultButton } from "./DefaultButton";

export const cssGreenButton = css`
  ${cssDefaultButton}
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.green};
  border: 2px solid ${(props) => props.theme.greenOff};
  font-size: ${(props) =>
    props.fontSize ? (props) => props.fontSize : "1rem"};;
  box-shadow:none;


  :hover {
    background-color: ${(props) => props.theme.greenOff};
    border: 2px solid ${(props) => props.theme.green};
    
  }

  :hover::after {
    background-color: ${(props) => props.theme.green};
    border: 2px solid ${(props) => props.theme.greenOff};
  }
`;

const GreenButton = styled.button`
  ${cssGreenButton}
`;

export default GreenButton;
