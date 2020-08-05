import styled from "styled-components";

const Header = styled.h1`
  font-size: 2.5rem;
  text-shadow: 6px 4px 6px ${(props) => props.theme.black};
  margin: 0 0 0.25em 0;
  line-height: 1.25em;
  color: ${(props) => props.theme.white};
`;

export default Header;
