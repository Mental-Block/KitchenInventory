import React from "react";

import { StyledNav } from "root/css";

import Logo from "./Logo";
import Menu from "./Menu";

export default function Navigation() {
  return (
    <>
      <StyledNav>
        <Logo />
        <Menu />
      </StyledNav>
    </>
  );
}
