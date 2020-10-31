import styled from "styled-components";

export const StyledWhiteHeader = styled.h1`
  font-size: 2.5rem;
  text-shadow: 6px 4px 6px ${(props) => props.theme.black};
  margin: 0 0 0.25em 0;
  line-height: 1.25em;
  text-align: ${(props) => (props.textCenter ? "center" : "start")};
  color: ${(props) => props.theme.white};
`;

export const StyledWhiteSubHeader = styled(StyledWhiteHeader)`
  font-size: 1.75rem;
  margin: 0.5em 0 1em 0;
`;

export const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  line-height: 1.25em;
  margin-bottom: 0.5em;
  text-align: ${(props) => (props.textCenter ? "center" : "start")};
`;
