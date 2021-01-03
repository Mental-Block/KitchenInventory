import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import UserContext from "root/context/UserContext";
import SearchContext from "root/context/SearchContext"

import { StyledRedButton, StyledInput } from "root/css";

export default function PrivateNav() {
  const history = useHistory();
  const { setUserData, userData } = useContext(UserContext);
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const pushPage = () => {
    if (history.location.pathname !== `/dashboard`) {
      setSearchValue("")
      history.push(`/dashboard`);
    }
  }

  const search = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value)
  }

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
      <StyledInput value={searchValue} onClick={() => pushPage()} onChange={(event) => search(event)} placeholder="search..." name="search" />
      <StyledRedButton onClick={() => logout()}>Log Out</StyledRedButton>
    </>
  )
}