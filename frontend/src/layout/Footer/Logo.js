import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "root/context/UserContext";

import { StyledLogo } from "root/css";

export default function Logo({ ...props }) {
  const { userData } = useContext(UserContext);

  if (userData.user) return (
    <>
      <Link to={`/user/${userData.user.id}`}>
        <StyledLogo onClick={props.top} src="/images/InvertedLogo.svg" />
      </Link>
    </>
  )

  return (
    <>
      <Link to="/">
        <StyledLogo onClick={props.top} src="/images/InvertedLogo.svg" />
      </Link>
    </>
  )
}
