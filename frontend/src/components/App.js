import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//global rest
import "normalize.css";
import GlobalStyle from "./globalStyle";
import defaultTheme from "./theme";

import { Navigation, Footer } from "./template";
import * as Pages from "./pages";

export default function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Pages.Home} />
            <Route exact path="/login" component={Pages.Login} />
            <Route exact path="/register" component={Pages.Register} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}
