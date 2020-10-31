import styled from "styled-components";

export const StyledGreenLink = styled.a`
  color: ${(props) => props.theme.green};
  text-decoration: none;

  :hover {
    color: ${(props) => props.theme.greenOff};
    text-decoration: underline;
  }
`;
