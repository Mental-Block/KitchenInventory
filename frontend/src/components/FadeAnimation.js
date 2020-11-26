import React from "react";

import { CSSTransition, SwitchTransition } from "react-transition-group";
import { StyledFadeAnimation } from "root/css"

export default function FadeAnimation({ children, trigger, timeout }) {
    return (
        <StyledFadeAnimation>
            <SwitchTransition>
                <CSSTransition key={trigger} classNames={"fade"} timeout={timeout}>
                    {children}
                </CSSTransition>
            </SwitchTransition>
        </StyledFadeAnimation>
    )
}