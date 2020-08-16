import React from "react";
import { Link } from "react-router-dom";

import {
  StyledCopyRight,
  StyledFooter,
  StyledDivider,
  StyledLogo,
} from "./styled";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Link to="/">
          <StyledLogo src="./images/InvertedLogo.svg" />
        </Link>
        <StyledDivider />
        <StyledCopyRight>
          © 2020 Kitchen Inventory. All Rights Reserved.
        </StyledCopyRight>
      </StyledFooter>
    </>
  );
}
