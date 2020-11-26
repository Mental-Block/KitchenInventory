import React from "react"
import { NavLink } from "react-router-dom";

import scrollTo from "root/function/scrollTo";

import { PUBLIC } from "../Routes/routes"

import { StyledGreenButton, StyledNavLink } from "root/css";

export default function PublicNav() {
  return (
    <>
      { PUBLIC.map(({ value, path }, key) => {
        if (path === "/register") return (
          <StyledGreenButton as={NavLink} exact key={path} to={path} onClick={() => scrollTo(0, 0)}>
            {value}
          </StyledGreenButton>)

        return (
          <StyledNavLink
            key={key}
            to={path}
            exact
            activeClassName={"active"}
            onClick={() => scrollTo(0, 0)}
          >
            {value}
          </StyledNavLink>)
      })}
    </>
  )
}