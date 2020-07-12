import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import { StyledNav } from "../../css/template/navigation";

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
