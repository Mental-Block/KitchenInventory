import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "normalize.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, DefaultTheme, StyledContentWrapper } from "root/css";

import * as Layout from "./layout";

import UserContext from "./context/UserContext";

import customFetch from "./function/customFetch";
import getToken from "./function/getToken";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLogin = async () => {
      const token = getToken();

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
              <Layout.Navigation />
              {userData.user ? <Layout.SideBar /> : null}
              <Layout.Routes />
              <Layout.Footer />
            </StyledContentWrapper>
          </UserContext.Provider>
        </Router>
      </ThemeProvider>
    </>
  );
}
