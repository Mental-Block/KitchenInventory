import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { sizes } from "../../css/devices";
import { StyledGreenButton } from "../../css/button";
import {
  StyledNav,
  StyledNavLink,
  StyledLinkContainer,
  StyledLogo,
  StyledBurger,
  StyledBurgerLine,
  StyledClickCatcher,
} from "./styled";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
  { name: "Sign up", path: "/register" },
];

export default function Navigation() {
  return (
    <>
      <StyledNav>
        <NavLink to="/" exact={true}>
          <StyledLogo src="/images/Logo.svg" />
        </NavLink>
        <Menu />
      </StyledNav>
    </>
  );
}

const Menu = () => {
  const [toggleValue, toggle] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", forceMenuOpen);
    return () => window.removeEventListener("resize", forceMenuOpen);
  }, [toggleValue]);

  const forceMenuOpen = () => {
    if (window.innerWidth >= parseInt(sizes.tablet) && toggleValue === false)
      toggle(!toggleValue);
  };

  return (
    <>
      <StyledBurger
        toggleValue={toggleValue}
        onClick={() => toggle(!toggleValue)}
      >
        <StyledBurgerLine />
        <StyledBurgerLine />
        <StyledBurgerLine />
        {toggleValue ? (
          <StyledClickCatcher onClick={() => toggle(!toggleValue)} />
        ) : null}
      </StyledBurger>

      <Links toggleValue={toggleValue} />
    </>
  );
};

const Links = ({ toggleValue }) => {
  return (
    <>
      <StyledLinkContainer toggleValue={toggleValue}>
        {ROUTES.map(({ name, path }) => {
          if (path === "/register") {
            return (
              <StyledGreenButton as={NavLink} key={path} exact to={path}>
                {name}
              </StyledGreenButton>
            );
          }

          return (
            <StyledNavLink
              key={path}
              to={path}
              exact
              activeClassName={"active"}
            >
              {name}
            </StyledNavLink>
          );
        })}
      </StyledLinkContainer>
    </>
  );
};
