import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import scrollTo from "root/function/scrollTo";

import UserContext from "root/context/UserContext";

import { StyledSpaceBetween, StyledLogo } from "root/css";

export default function Logo() {
  const { userData } = useContext(UserContext);

  return (
    <>
      {userData.user ? (
        <StyledSpaceBetween>
          <NavLink to={`/user/${userData.user.id}`} exact onClick={() => scrollTo(0, 0)}>
            <StyledLogo src="/images/user.svg" />
          </NavLink>
          <h2>{userData.user.displayName}</h2>
        </StyledSpaceBetween>
      ) : (
        <NavLink to="/" exact onClick={() => scrollTo(0, 0)}>
          <StyledLogo src="/images/Logo.svg" />
        </NavLink>
      )}
    </>
  );
}
