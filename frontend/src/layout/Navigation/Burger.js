import React from "react";

import ClickCatcher from "./ClickCatcher";

import { StyledBurger } from "root/css";

export default function Burger({ ...props }) {
   return (
      <>
         <StyledBurger src="/images/HambugerMenu.svg" open={props.open} onClick={props.close} />
         <ClickCatcher open={props.open} close={props.close} />
      </>
   )
}
