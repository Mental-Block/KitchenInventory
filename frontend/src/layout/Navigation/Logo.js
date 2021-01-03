import React, { useContext } from "react";
import {useRouteMatch} from "react-router-dom"

import { NavLink } from "react-router-dom";

import UserContext from "root/context/UserContext";

import { StyledSpaceBetween, StyledLogo } from "root/css";

export default function Logo({ ...props }) {
  const { userData } = useContext(UserContext);

  if (userData.user) {
    return (
      <StyledSpaceBetween>
        <NavLink to="/">
          <StyledLogo onClick={props.top} src="/images/user.svg" />
        </NavLink>
        <h2>{userData.user.displayName}</h2>
      </StyledSpaceBetween>
    )
  }

  return (
    <NavLink to="/">
      <StyledLogo onClick={props.top} src="/images/Logo.svg" />
    </NavLink>
  );
}
