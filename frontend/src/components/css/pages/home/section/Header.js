import styled from "styled-components";

const Header = styled.h1`
  font-size: 2rem;
  margin-top: 0;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  line-height: 1.25em;
`;

export default Header;
