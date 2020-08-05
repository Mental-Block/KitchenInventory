import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "normalize.css";
import GlobalStyle from "./css/globalStyle";
import { RootWrapper } from "./css/layout/wrapper";

import { ThemeProvider } from "styled-components";
import defaultTheme from "./css/theme";

import { Navigation, PageRoutes, Footer } from "./template";

export default function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router>
          <RootWrapper>
            <Navigation />
            <PageRoutes />
            <Footer />
          </RootWrapper>
        </Router>
      </ThemeProvider>
    </>
  );
}
