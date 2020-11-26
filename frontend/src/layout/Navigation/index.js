import React, { useState } from "react";

import { StyledNav } from "root/css";
import { sizes } from "root/css/devices";

import scrollTo from "root/function/scrollTo";

import useWindowEvent from "root/use/useWindowEvent"

import Logo from "./Logo";
import Burger from "./Burger";
import Menu from "./Menu"

export default function Navigation() {
  const [open, setOpen] = useState(true);

  const forceOpen = () => {
    if (window.innerWidth >= parseInt(sizes.tablet)) setOpen(true);
  };

  useWindowEvent("resize", forceOpen);

  return (
    <>
      <StyledNav>
        <Logo top={() => scrollTo(0, 0)} />
        <Burger open={open} close={() => setOpen(!open)} />
        <Menu open={open} />
      </StyledNav>
    </>
  );
}
