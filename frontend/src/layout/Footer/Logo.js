import React, { useContext } from "react";
import { Link } from "react-router-dom";

import scrollTo from "root/function/scrollTo";

import UserContext from "root/context/UserContext";

import { StyledLogo } from "root/css";

export default function Logo() {
  const { userData } = useContext(UserContext);
  return (
    <>
      {userData.user ? (
        <Link to={`/user/${userData.user.id}`} onClick={() => scrollTo(0, 0)}>
          <StyledLogo src="/images/InvertedLogo.svg" />
        </Link>
      ) : (
        <Link to="/" onClick={() => scrollTo(0, 0)}>
          <StyledLogo src="/images/InvertedLogo.svg" />
        </Link>
      )}
    </>
  );
}
