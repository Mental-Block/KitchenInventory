import React from "react";

import { StyledLink, StyledLinkWrapper } from "../../css/template/navigation";

const Links = ({ toggleValue }) => {
  const URL = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Login",
      path: "/login",
    },
    {
      title: "Sign up",
      path: "/register",
    },
  ];

  return (
    <>
      <StyledLinkWrapper toggleValue={toggleValue}>
        {URL.map((url, i) => {
          return (
            <StyledLink key={i} exact activeClassName={"active"} to={url.path}>
              {url.title}
            </StyledLink>
          );
        })}
      </StyledLinkWrapper>
    </>
  );
};

export default Links;
