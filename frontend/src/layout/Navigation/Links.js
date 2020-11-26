import React, { useContext } from "react";

import UserContext from "root/context/UserContext";

import PublicNav from "./PublicNav"
import PrivateNav from "./PrivateNav"

import { StyledLinkContainer } from "root/css";

export default function Links() {
  const { userData } = useContext(UserContext);

  return (
    <>
      <StyledLinkContainer user={userData.user}>
        {userData.user ? <PrivateNav /> : <PublicNav />}
      </StyledLinkContainer>
    </>
  )
}