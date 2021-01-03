import React from "react";

import { PRIVATE } from "../Routes/routes"

import {
  StyledAside,
  StyledX,
  StyledNavLink,
  StyledPageWrapper,
  StyledCenter,
} from "root/css";

import scrollTo from "root/function/scrollTo"

export default function SideBar({...props}) {
    return (
      <StyledAside>
        <StyledPageWrapper>
          <StyledX onClick={props.close} />
            <StyledCenter>
              {PRIVATE.map(({ path, value }, key) => (
                <StyledNavLink
                  onClick={() => scrollTo(0, 0)}
                  exact
                  key={key}
                  to={path}
                  activeClassName={"active"}
                  className={"sidebar_link"}
                >
                  {value}
                </StyledNavLink>
              ))}
            </StyledCenter>
          </StyledPageWrapper>
        </StyledAside>
    )
  }