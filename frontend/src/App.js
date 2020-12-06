import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, DefaultTheme, StyledContentWrapper } from "root/css";

import Routes from "./layout/Routes";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";

import UserContext from "./context/UserContext";
import SearchContext from "./context/SearchContext"

import customFetch from "root/function/customFetch";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    const checkLogin = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenIsValid = await customFetch("/api/users/tokenIsValid", {
        method: "POST",
        headers: { "x-auth-token": token },
      });

      if (!tokenIsValid) return;
      const user = await customFetch("/api/users/user", {
        method: "GET",
        headers: { "x-auth-token": token },
      });

      setUserData({ token: token, user: user });
      localStorage.setItem("auth-token", token);
    };

    checkLogin();
  }, []);


  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Router>
          <UserContext.Provider value={{ userData, setUserData }}>
            <StyledContentWrapper>
              <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <Navigation />
                <Routes />
              </SearchContext.Provider>
              <Footer />
            </StyledContentWrapper>
          </UserContext.Provider>
        </Router>
      </ThemeProvider>
    </>
  );
}
