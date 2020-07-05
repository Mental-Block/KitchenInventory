import React from "react";
import { NavLink } from "react-router-dom";

//css
import styled from "styled-components";

//layout
import { device } from "../layout/devices";
import {
  flexCenterCenter,
  flexColumn,
  flexRow,
  flexSpace,
  flexSpaceCenter,
} from "../layout/flex";

export const StyledNav = styled.nav`
  position: sticky;
  height: 60px;
  padding: 0.8rem;
  background-color: ${(props) => props.theme.white};
  background: linear-gradient(
    ${(props) => props.theme.white} 20%,
    ${(props) => props.theme.grey}
  );
  ${flexSpaceCenter}
`;

const active = "active";
const StylingNavLink = styled(NavLink)`
  color: ${(props) => props.theme.black};
  text-decoration: none;
  font-weight: 600;
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

  &.${active} {
    ::after {
      width: 100%;
    }
  }

  :hover::after {
    width: 100%;
    transition: width 300ms;
  }
`;

export function StyledNavLink({ to, linkName }) {
  return (
    <StylingNavLink exact activeClassName={active} to={to}>
      {linkName}
    </StylingNavLink>
  );
}
export const StyledNavLinkWrapper = styled.div`
  position: absolute;
  padding: 2rem 0;
  z-index: 1;
  bottom: -288px;
  left: 0px;
  right: 0px;
  width: 100%;
  opacity: ${(props) => (props.toggleValue ? "1" : "0")};
  background: ${(props) => props.theme.grey};
  transition: visibility 0s linear 0.5s, opacity 0.5s linear;
  transition-delay: ${(props) => (props.toggleValue ? "0s" : "none")};
  visibility: ${(props) => (props.toggleValue ? "visible" : "hidden")};
  ${flexColumn};
  ${flexCenterCenter};

  @media ${device.tablet} {
    opacity: initial;
    position: initial;
    visibility: initial;
    width: 360px;
    margin-right: 0.8rem;
    background: none;
    ${flexRow};
    ${flexSpace};
  }
`;

export const StyledBurger = styled.div`
  margin-right: 0.5rem;
  height: auto;
  width: auto;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.5s linear;
  background-color: ${(props) =>
    props.toggleValue ? props.theme.lightGrey : "none"};

  @media ${device.tablet} {
    display: none;
  }

  :hover {
    cursor: pointer;
  }
`;

export const StyledBurgerLine = styled.div`
  width: 28px;
  height: 6px;
  background-color: ${(props) => props.theme.black};

  :nth-child(2) {
    margin: 0.3rem 0;
  }
`;

export const StyledClickCatcher = styled.div`
  position: absolute;
  cursor: default;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
`;
