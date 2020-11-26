import React, { useContext } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { StyledPageAnimation, StyledPageInnerWrapper } from "root/css";

import UserContext from "root/context/UserContext";

import { PUBLIC, PRIVATE } from "./routes";
import NotFound from "../pages/404NotFound";

function Routes({ location }) {
  const { userData } = useContext(UserContext);

  return (
    <>
      <StyledPageAnimation>
        <TransitionGroup>
          <CSSTransition 
          key={location.key} classNames={"page"} timeout={500}>
            <StyledPageInnerWrapper>
              <Switch location={location}>
                {userData.user
                  ? PRIVATE.map((route, key) => <Route exact {...route} key={key} />)
                  : PUBLIC.map((route, key) => <Route exact {...route} key={key} />)
                  }
                <Route path="*" component={NotFound} />
                <Route path="/404" component={NotFound} />
              </Switch>
            </StyledPageInnerWrapper>
          </CSSTransition>
        </TransitionGroup>
      </StyledPageAnimation>
    </>
  );
}

export default withRouter(Routes);
