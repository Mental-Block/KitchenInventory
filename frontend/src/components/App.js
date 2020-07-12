import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "normalize.css";
import defaultTheme from "./css/theme";
import GlobalStyle from "./css/globalStyle";
import { ThemeProvider } from "styled-components";
import { Navigation, PageRoutes, Footer } from "./template";

export default function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router>
          <Navigation />
          <PageRoutes />
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}
