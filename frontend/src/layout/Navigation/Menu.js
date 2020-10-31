import React, { useState, useEffect } from "react";

import useWindowSize from "root/use/useWindowSize";

import { sizes } from "root/css/devices";
import { StyledBurger, StyledClickCatcher } from "root/css";

import Links from "./Links";

export default function Menu() {
  const [toggleValue, toggle] = useState(true);
  const size = useWindowSize();

  useEffect(() => {
    const forceToggle = (toggle) => {
      if (size.width >= parseInt(sizes.tablet)) toggle(true);
    };
    forceToggle(toggle);
    return forceToggle(toggle)
  });

  return (
    <>
      <StyledBurger toggleValue={toggleValue} onClick={() => toggle(!toggleValue)}>
        {toggleValue ? <StyledClickCatcher onClick={() => toggle(!toggleValue)} /> : null}
      </StyledBurger>
      <Links toggleValue={toggleValue} />
    </>
  );
}
