import styled from "styled-components";

const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  line-height: 1.25em;
  margin-bottom: 0.5em;
`;

export default Header;
