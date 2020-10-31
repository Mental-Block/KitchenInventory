import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 1em;
  border-radius: 0.3em;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  transition: 300ms ease-in;
  font-weight: 700;
  letter-spacing: 0.75px;
  line-height: 1rem;
  display: inline-block;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  box-shadow: none;

  :hover {
    box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  }
`;

export const StyledGreenButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.green};
  border: 2px solid ${(props) => props.theme.greenOff};

  :hover {
    background-color: ${(props) => props.theme.greenOff};
    border: 2px solid ${(props) => props.theme.green};
  }

  :hover::after {
    background-color: ${(props) => props.theme.green};
    border: 2px solid ${(props) => props.theme.greenOff};
  }
`;

export const StyledRedButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.red};
  border: 2px solid ${(props) => props.theme.redOff};

  :hover {
    background-color: ${(props) => props.theme.redOff};
    border: 2px solid ${(props) => props.theme.red};
  }

  :hover::after {
    background-color: ${(props) => props.theme.red};
    border: 2px solid ${(props) => props.theme.redOff};
  }
`;
