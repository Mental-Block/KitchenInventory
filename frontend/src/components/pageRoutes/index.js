import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { StyledAnimation } from "./styled";
import * as Pages from "../../pages";

const ROUTES = [
  { path: "/", component: Pages.Home },
  { path: "/contact", component: Pages.Contact },
  { path: "/login", component: Pages.Login },
  { path: "/register", component: Pages.Register },
];

export default function PageRoutes() {
  const location = useLocation();

  return (
    <>
      <StyledAnimation>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames={"fade"} timeout={300}>
            <div className={"page"}>
              <Switch location={location}>
                {ROUTES.map((ROUTE, key) => (
                  <Route exact {...ROUTE} key={key} />
                ))}

                <Route
                  path="*"
                  render={() => (
                    <>
                      <h1>404 Couldn't find {location.pathname}.</h1>
                    </>
                  )}
                />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </StyledAnimation>
    </>
  );
}
