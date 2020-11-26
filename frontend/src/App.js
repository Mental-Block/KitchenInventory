import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, DefaultTheme, StyledContentWrapper } from "root/css";

import Routes from "./layout/Routes";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";

import UserContext from "./context/UserContext";

import useCheckLogin from "./use/useCheckLogin";

export default function App() {
  const user = useCheckLogin();

  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Router>
          <UserContext.Provider value={{...user}}>
            <StyledContentWrapper>
              <Navigation />
              <Routes />
              <Footer />
            </StyledContentWrapper>
          </UserContext.Provider>
        </Router>
      </ThemeProvider>
    </>
  );
}
