import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import { size } from "../css/layout/devices";

import {
  StyledNav,
  StyledNavLinkWrapper,
  StyledBurger,
  StyledBurgerLine,
  StyledClickCatcher,
  StyledNavLink,
} from "../css/template/Navigation";

export default function Navigation() {
  return (
    <>
      <StyledNav>
        <Logo />
        <Burger />
      </StyledNav>
    </>
  );
}

const Logo = () => {
  return (
    <Link to="/">
      <img src="/images/Logo.svg" />
    </Link>
  );
};

const Burger = () => {
  const [toggleValue, toggle] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", forceMenuOpen);
    return () => window.removeEventListener("resize", forceMenuOpen);
  }, [toggleValue]);

  function forceMenuOpen() {
    if (window.innerWidth >= parseInt(size.tablet) && toggleValue === false)
      toggle(!toggleValue);
    return;
  }

  return (
    <>
      <StyledBurger
        aria-label="navigation menu"
        toggleValue={toggleValue}
        onClick={() => toggle(!toggleValue)}
      >
        <StyledBurgerLine />
        <StyledBurgerLine />
        <StyledBurgerLine />
        {toggleValue ? (
          <StyledClickCatcher onclick={() => toggle(!toggleValue)} />
        ) : null}
      </StyledBurger>

      <LinkWrapper toggleValue={toggleValue} />
    </>
  );
};

const LinkWrapper = ({ toggleValue }) => {
  return (
    <StyledNavLinkWrapper toggleValue={toggleValue}>
      <StyledNavLink to="/" linkName="Home" />
      <StyledNavLink to="/contact" linkName="Contact" />
      <StyledNavLink to="/login" linkName="Log in" />
      <StyledNavLink to="/register" linkName="Sign Up" />
    </StyledNavLinkWrapper>
  );
};
