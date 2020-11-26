import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import UserContext from "root/context/UserContext";

import { StyledRedButton, StyledInput } from "root/css";

export default function PrivateNav() {
  const history = useHistory();
  const { setUserData } = useContext(UserContext);

  const logout = () => {
    setUserData({
      token: null,
      user: null,
    });
    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  return (
    <>
      <StyledInput style={{ width: "280px" }} placeholder="search for items or groups..." name="search" />
      <StyledRedButton onClick={() => logout()}>Log Out</StyledRedButton>
    </>
  )
}