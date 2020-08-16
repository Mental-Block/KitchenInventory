import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "normalize.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { defaultTheme } from "./css/globalStyle";
import { StyledPageWrapper } from "./css/wrapper";

import { Navigation, PageRoutes, Footer } from "./components";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <StyledPageWrapper>
            <Navigation />
            <PageRoutes />
            <Footer />
          </StyledPageWrapper>
        </Router>
      </ThemeProvider>
    </>
  );
}
