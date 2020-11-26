import React from "react";

import {StyledSidebarMenu } from "root/css";

export default function Burger({...props}){
    return(
      <>
        <StyledSidebarMenu onClick={props.close}>
          <img src="/images/sidebarMenu.svg" />
        </StyledSidebarMenu>
      </>
    )
  }