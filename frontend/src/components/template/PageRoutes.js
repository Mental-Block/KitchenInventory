import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AnimationWrapper, RoutesWrapper } from "../css/template/pageRoutes";
import * as Pages from "./pages";

function PageRoutes({ location }) {
  return (
    <>
      <AnimationWrapper>
        <TransitionGroup>
          <CSSTransition
            classNames={"fade"}
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
          >
            <RoutesWrapper>
              <Switch>
                <Route exact path="/" component={Pages.Home} />
                <Route exact path="/contact" component={Pages.Contact} />
                <Route exact path="/login" component={Pages.Login} />
                <Route exact path="/register" component={Pages.Register} />
              </Switch>
            </RoutesWrapper>
          </CSSTransition>
        </TransitionGroup>
      </AnimationWrapper>
    </>
  );
}

export default withRouter(PageRoutes);
