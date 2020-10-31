import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  line-height: 1.8rem;
  margin: 1em 0;
`;

export const StyledLoginParagraph = styled.p`
  padding-top: 0.2rem;
  display: inline-block;
  line-height: 1.5rem;
`;
