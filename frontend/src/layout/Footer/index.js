import React from "react";

import { StyledFooter, StyledDivider, StyledCopyRight } from "root/css";

import scrollTo from "root/function/scrollTo";

import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Logo top={() => scrollTo(0, 0)} />
        <StyledDivider />
        <StyledCopyRight>© 2020 Kitchen Inventory. All Rights Reserved.</StyledCopyRight>
      </StyledFooter>
    </>
  );
}
