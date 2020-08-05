import React from "react";

import { StyledLink, StyledLinkWrapper } from "../../css/template/navigation";
import { GreenButtonLink } from "../../css/reusables/link";

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
          if (url.path === "/register") {
            return (
              <GreenButtonLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                key={i}
                exact="true"
                to={url.path}
              >
                {url.title}
              </GreenButtonLink>
            );
          }

          return (
            <StyledLink
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              key={i}
              exact
              activeClassName={"active"}
              to={url.path}
            >
              {url.title}
            </StyledLink>
          );
        })}
      </StyledLinkWrapper>
    </>
  );
};

export default Links;
