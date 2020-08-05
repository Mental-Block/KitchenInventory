import styled from "styled-components";
import { flexSpaceCenter } from "../../layout/flex";

const Nav = styled.nav`
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0.6rem 0.8rem;
  background-color: ${(props) => props.theme.white};
  background: linear-gradient(
    ${(props) => props.theme.white} 20%,
    ${(props) => props.theme.grey}
  );
  ${flexSpaceCenter}
`;

export default Nav;
