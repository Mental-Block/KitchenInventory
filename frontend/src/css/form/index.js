import styled from "styled-components";
import { devices } from "../devices";

import { StyledGreenButton } from "../button";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 320px;
  padding: 2em;
  box-shadow: -5px 5px 20px ${(props) => props.theme.grey},
    5px 5px 20px ${(props) => props.theme.grey};
  border-radius: 8px;
  background: ${(props) => props.theme.white};

  textarea {
    height: 200px;
    resize: none;
    max-width: 100%;
    min-width: 100%;
  }

  select {
    background: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20448%22%20enable-background%3D%22new%200%200%20256%20448%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.arrow%7Bfill%3A%23424242%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22arrow%22%20d%3D%22M255.9%20168c0-4.2-1.6-7.9-4.8-11.2-3.2-3.2-6.9-4.8-11.2-4.8H16c-4.2%200-7.9%201.6-11.2%204.8S0%20163.8%200%20168c0%204.4%201.6%208.2%204.8%2011.4l112%20112c3.1%203.1%206.8%204.6%2011.2%204.6%204.4%200%208.2-1.5%2011.4-4.6l112-112c3-3.2%204.5-7%204.5-11.4z%22%2F%3E%3C%2Fsvg%3E%0A")
      no-repeat right 10px center;
    background-size: auto 50%;
  }

  @media ${devices.mobileL} {
    max-width: 480px;
  }
`;

export const StyledFormControl = styled.div`
  margin-bottom: ${(props) => props.sm ? "1.562rem" : '2rem'}; ;
  display: block;
  width: 100%;
`;

export const StyledLabel = styled.label`
  display: block;
  margin: 0.2rem 0;
  text-indent: 0.2rem;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.type === "file" ? "none" : props.theme.grey)};
  padding: ${(props) => props.type === "file" ? "0.25rem 0 0 0.2rem" : props.sm ? "0.5rem" : "0.75rem"
  };
  margin: ${(props) => props.sm ? "0" : "0.25rem 0"}; 
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  :focus {
    border: 1px solid ${(props) => props.theme.green};
    box-shadow: inset 0px 0px 10px ${(props) => props.theme.green};
    outline: none;
  }

  ::-webkit-file-upload-button {
    cursor: pointer;
    padding: ${(props) => props.sm ? "0.75em" : " 1em"};
    border-radius: 0.3em;
    box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
      inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    text-align: center;
    transition: 300ms ease-in;
    font-weight: ${(props) => props.sm ? "600" : " 700"};
    letter-spacing: 0.75px;
    line-height: ${(props) => props.sm ? "0.8em" : " 1em"};
    font-size: ${(props) => props.sm ? "0.8rem" : " 1rem"};
    display: inline-block;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    box-shadow: none;
    background-color: ${(props) => props.theme.green};
    border: 2px solid ${(props) => props.theme.greenOff}; 


    :hover {
      background-color: ${(props) => props.theme.greenOff};
      border: 2px solid ${(props) => props.theme.green};
      box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
        inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    }

    :hover::after {
      background-color: ${(props) => props.theme.green};
      border: 2px solid ${(props) => props.theme.greenOff};
    }
  }
`;

export const StyledErrorText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.red};
`;

export const StyledGreenPlus = styled(StyledGreenButton)`
  margin: 0 0 0.65rem 1.75rem;
  padding: 0.75em 1em;
`;

export const StyledFormMargin = styled.div`
  padding: 2em 0;

  @media ${devices.mobileL} {
    padding: 4em 0;
  }
`