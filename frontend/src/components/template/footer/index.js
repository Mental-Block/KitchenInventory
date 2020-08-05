import React from "react";

import Logo from "./Logo";

import {
  StyledFooter,
  StyledDivider,
  StyledText,
} from "../../css/template/footer";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Logo />
        <StyledDivider />
        <StyledText>© 2020 Kitchen Inventory. All Rights Reserved.</StyledText>
      </StyledFooter>
    </>
  );
}
