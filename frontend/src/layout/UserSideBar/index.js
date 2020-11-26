import React, { useState } from "react";

import FadeAnimation from "root/components/FadeAnimation"

import Burger from "./Burger"
import SideBar from "./SideBar"

export default function UserSideBar({ userData }) {
  const [open, setOpen] = useState(true);
  const close = () => setOpen(!open)

  return (
    <>
      <FadeAnimation trigger={open} timeout={500}>
        {open ? <SideBar close={close} {...userData} /> : <Burger close={close} />}
      </FadeAnimation>
    </>
  );
}
