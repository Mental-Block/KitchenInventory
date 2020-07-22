import { NavLink } from "react-router-dom";

import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.black};
  text-decoration: none;
  font-weight: 700;
  padding-top: 3px;
  margin: 1rem 0;

  ::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background-color: ${(props) => props.theme.green};
    transition: width 300ms;
  }

  &.active {
    ::after {
      width: 100%;
    }
  }

  :hover::after {
    width: 100%;
    transition: width 300ms;
  }
`;

export default StyledNavLink;
