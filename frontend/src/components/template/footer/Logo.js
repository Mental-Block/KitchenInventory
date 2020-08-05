import React from "react";
import { Link } from "react-router-dom";

import { StyledLogo } from "../../css/template/footer";

const Logo = () => {
  return (
    <Link
      to="/"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <StyledLogo src="./images/InvertedLogo.svg" />
    </Link>
  );
};

export default Logo;
