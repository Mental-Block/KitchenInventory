import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import UserContext from "root/context/UserContext";

import scrollTo from "root/function/scrollTo";

import {
  StyledFadeAnimation,
  StyledGreenButton,
  StyledRedButton,
  StyledInput,
  StyledNavLink,
  StyledLinkContainer,
} from "root/css";

export default function NavLinks({ toggleValue }) {
  const history = useHistory();
  const { userData, setUserData } = useContext(UserContext);
  const [searchValue, setSearch] = useState(null);

  //const {} = useFetch("api/search")

  const ROUTES = [
    { value: "Home", path: "/" },
    { value: "Contact", path: "/contact" },
    { value: "Login", path: "/login" },
    { value: "Sign up", path: "/register" },
  ];

  const logout = () => {
    setUserData({
      token: null,
      user: null,
    });
    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  return (
    <> 
   
        <StyledFadeAnimation>
          <SwitchTransition>
            <CSSTransition key={toggleValue} classNames={"fade"} timeout={500}>
              {toggleValue ? 
              <StyledLinkContainer user={userData.user}>
                
                {userData.user ? (
                  <>
                    <StyledInput style={{width: "280px"}} placeholder="search for items or groups..." name="search" />
                    <StyledRedButton onClick={() => logout()}>Log Out</StyledRedButton>
                  </>
                ) : (
                  ROUTES.map(({ value, path }) =>
                    path === "/register" ? (
                      <StyledGreenButton as={NavLink} exact key={path} to={path} onClick={() => scrollTo(0, 0)}>
                        {value}
                      </StyledGreenButton>
                    ) : (
                      <StyledNavLink
                        key={path}
                        to={path}
                        exact
                        activeClassName={"active"}
                        onClick={() => scrollTo(0, 0)}
                      >
                        {value}
                      </StyledNavLink>
                    )
                  )
                )}
              </StyledLinkContainer>
              : <></>}
            </CSSTransition>
          </SwitchTransition>
        </StyledFadeAnimation>
        
    </>
  );
}
