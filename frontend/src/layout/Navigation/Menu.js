import React from "react"

import { CSSTransition, SwitchTransition } from "react-transition-group";
import { StyledFadeAnimation } from "root/css";

import Links from "./Links"

export default function Menu({ ...props }) {
  //should probably put the animation in a separate comp....
  return (
    <>
      <StyledFadeAnimation>
        <SwitchTransition>
          <CSSTransition key={props.open} classNames={"fade"} timeout={500}>
            {!props.open ? <></> : <Links />}
          </CSSTransition>
        </SwitchTransition>
      </StyledFadeAnimation>
    </>
  );
}