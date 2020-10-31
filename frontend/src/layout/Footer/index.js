import React from "react";

import { StyledFooter, StyledDivider, StyledCopyRight } from "root/css";

import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Logo />
        <StyledDivider />
        <StyledCopyRight>© 2020 Kitchen Inventory. All Rights Reserved.</StyledCopyRight>
      </StyledFooter>
    </>
  );
}
