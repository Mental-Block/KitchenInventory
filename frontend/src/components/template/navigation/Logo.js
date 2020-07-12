import React from "react";
import { NavLink as Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/images/Logo.svg" />
    </Link>
  );
};

export default Logo;
