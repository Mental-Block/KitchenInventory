import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { devices } from "../../css/devices";
import {
  flexColumn,
  flexCenterCenter,
  flexRow,
  flexSpace,
  flexSpaceCenter,
} from "../../css/flex";

export const StyledBurger = styled.div`
  cursor: pointer;
  height: auto;
  width: auto;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.5s linear;
  background-color: ${(props) =>
    props.toggleValue ? props.theme.grey : "none"};

  @media ${devices.tablet} {
    display: none;
  }

  /* separate the BurgerLines */
  div:nth-child(2) {
    margin: 0.3rem 0;
  }
`;

export const StyledBurgerLine = styled.div`
  width: 28px;
  height: 6px;
  background-color: ${(props) => props.theme.black};
`;

export const StyledClickCatcher = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  cursor: default;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.black};
  text-decoration: none;
  font-weight: 700;
  padding-top: 3px;

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

export const StyledLinkContainer = styled.div`
  position: absolute;
  padding: 2rem 0;
  bottom: -312px;
  left: 0px;
  right: 0px;
  width: 100%;
  opacity: ${(props) => (props.toggleValue ? "1" : "0")};
  background: ${(props) => props.theme.grey};
  transition: visibility 0s linear 0.5s, opacity 0.5s linear;
  transition-delay: ${(props) => (props.toggleValue ? "0s" : "none")};
  visibility: ${(props) => (props.toggleValue ? "visible" : "hidden")};
  ${flexCenterCenter};
  ${flexColumn};

  a {
    margin: 1rem 0;
  }

  @media ${devices.tablet} {
    opacity: initial;
    position: initial;
    visibility: initial;
    width: 360px;
    padding: 0;
    background: none;
    ${flexRow};
    ${flexSpace};

    a {
      margin: 0;
    }
  }
`;

export const StyledLogo = styled.img`
  width: 165px;
  height: auto;
`;

export const StyledNav = styled.nav`
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.6rem 0.8rem;
  background-color: ${(props) => props.theme.white};
  background: linear-gradient(
    ${(props) => props.theme.white} 20%,
    ${(props) => props.theme.grey}
  );
  ${flexSpaceCenter}
`;
