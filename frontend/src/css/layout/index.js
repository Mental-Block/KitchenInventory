import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { flexCenterCenter, flexColumn, flexRow, flexSpace, flexSpaceCenter } from "../flex";
import { devices, sizes } from "../devices";


export const StyledBurger = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 6px;
  transition: background-color 0.5s linear;
  background-size: contain;
  background: ${(props) => (props.open ? props.theme.grey : null)} url("/images/BurgerMenu.svg") no-repeat center
    center;

  @media ${devices.tablet} {
    display: none;
  }
`;

export const StyledClickCatcher = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: calc(100vh - 86px);
  cursor: default;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.black};
  text-decoration: none;
  font-weight: 700;
  padding-top: 3px;
  font-size: 1rem;
  margin-bottom: 1rem;

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

  &.sidebar_link {
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  :hover::after {
    width: 100%;
    transition: width 300ms;
  }

  @media ${devices.tablet} {
    margin: 0;
  }
`;

export const StyledLinkContainer = styled.div`
  position: absolute;
  margin-top: 0.6rem;
  padding: 2rem 0;
  bottom: auto;
  left: 0px;
  right: 0px;
  width: 100%;
  background: ${(props) => props.theme.grey};
  ${flexCenterCenter};
  ${flexColumn};

  input{width: 280px; margin-bottom: 1.5rem}

  @media ${devices.tablet} {
    margin-top: 0;
    position: initial;
    visibility: initial;
    width: ${(props) => props.user ? "400px" : "360px"};;
    padding: 0;
    background: none;
    ${flexRow};
    ${flexSpace};

    input{margin-bottom: auto;}
  }

  
`;

export const StyledLogo = styled.img`
  width: auto;
  height: 67px;
`;

export const StyledNav = styled.nav`
  position: fixed;
  max-width: ${sizes.desktop};
  margin: 0 auto;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.6rem 0.8rem;
  background-color: ${(props) => props.theme.white};
  background: linear-gradient(${(props) => props.theme.white} 20%, ${(props) => props.theme.grey});
  ${flexSpaceCenter};
  flex-wrap: wrap;

  div:nth-child(3) {
    width: 100%;
  }
  @media ${devices.tablet} {
    flex-wrap: nowrap;
    div:nth-child(3) {
      width: auto;
    }
  }
`;

export const StyledSidebarMenu = styled.div`
  position: fixed;
  top: 110px;
  left: 20px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-size: contain;
  z-index: 1;
`;

export const StyledAside = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  box-shadow: 5px -5px 20px ${(props) => props.theme.grey};
  background: ${(props) => props.theme.white};
  z-index: 1;
`;

export const StyledX = styled.span`
  position: absolute;
  right: 30px;
  top: 30px;
  width: 38px;
  height: 36px;
  z-index: 1;
  cursor: pointer;

  :hover {
    opacity: 1;
  }

  :before,
  :after {
    position: absolute;
    left: 16px;
    content: "";
    height: 36px;
    width: 6px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.red};
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

export const StyledCopyRight = styled.p`
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  line-height: 1.25em;
`;

export const StyledDivider = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 300px;
  max-width: 100%;
  height: 3px;
  margin: 1.25em 0 1em 0;
`;

export const StyledFooter = styled.footer`
  position: relative;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 3em;
  background-color: ${(props) => props.theme.black};
  ${flexCenterCenter};
  ${flexColumn};
`;
