import React, { useState, useContext } from "react";

import UserContext from "root/context/UserContext";

import { CSSTransition, SwitchTransition } from "react-transition-group";
import {
  StyledFadeAnimation,
  StyledAside,
  StyledX,
  StyledNavLink,
  StyledSidebarMenu,
  StyledPageWrapper,
  StyledCenter,
} from "root/css";

function SideBar() {
  const { userData } = useContext(UserContext);
  const [toggleValue, SetToggle] = useState(true);
  
  const ROUTES = [
    { path: "additems", value: "Add Item" },
    { path: "viewcategories", value: "Categories" },
    { path: `viewall`, value: "View all" },
    { path: `settings`, value: "Settings" },
  ];

  return (
    <>
      <StyledFadeAnimation>
        <SwitchTransition>
          <CSSTransition key={toggleValue} classNames={"fade"} timeout={500}>
            {toggleValue ? (
              <StyledAside>
                <StyledPageWrapper>
                  <StyledX onClick={() => SetToggle(!toggleValue)} />
                  <StyledCenter>
                    {ROUTES.map(({ path, value }, key) => (
                      <StyledNavLink
                        onClick={() => window.scrollTo(0, 0)}
                        exact
                        key={key}
                        to={`/user/${userData.user.id}/${path}`}
                        activeClassName={"active"}
                        className={"sidebar_link"}
                      >
                        {value}
                      </StyledNavLink>
                    ))}
                  </StyledCenter>
                </StyledPageWrapper>
              </StyledAside>
            ) : (
              <StyledSidebarMenu onClick={() => SetToggle(!toggleValue)}>
                <img src="/images/sidebarMenu.svg" />
              </StyledSidebarMenu>
            )}
          </CSSTransition>
        </SwitchTransition>
      </StyledFadeAnimation>
    </>
  );
}

export default SideBar;
