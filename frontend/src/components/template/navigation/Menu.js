import React, { useState, useEffect } from "react";

import Links from "./Links";

import { StyledBurger } from "../../css/template/navigation";
import { sizes } from "../../css/layout/devices";

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
        aria-label="navigation menu"
        toggleValue={toggleValue}
        onClick={() => toggle(!toggleValue)}
      >
        <div />
        <div />
        <div />
        {toggleValue ? <div onClick={() => toggle(!toggleValue)} /> : null}
      </StyledBurger>

      <Links toggleValue={toggleValue} />
    </>
  );
};

export default Menu;
