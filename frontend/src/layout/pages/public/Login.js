import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Input, Form } from "root/components/form";

import UserContext from "root/context/UserContext";

import customFetch from "root/function/customFetch";
import setErrorMessage from "root/function/setErrorMessage";

import {
  StyledSpaceBetween,
  StyledGreenButton,
  StyledLoginParagraph,
  StyledGreenLink,
  StyledPadding,
  StyledInnerWrapper,
  StyledCenter
} from "root/css";

export default function Login() {
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  const methods = useForm({ validateCriteriaMode: "all" });

  const login = async (data, event) => {
    event.preventDefault();

    const response = await customFetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.message) setErrorMessage(methods.setError, { ...response });
    else {
      const { token, user } = response;
      setUserData({ token: token, user: user });
      localStorage.setItem("auth-token", token);
      history.push(`/`);
    }
  }

  return (
    <>
      <StyledCenter>
        <StyledInnerWrapper>
          <StyledPadding>
            <Form onSubmit={login} methods={methods} >
              <Input name="loginEmail" label="Email" type="text" placeholder="Email" autoComplete="username" />
              <Input name="loginPassword" label="Password" type="password" placeholder="Password" autoComplete="current-password" />
              <StyledSpaceBetween>
                <StyledGreenButton as="input" value="Log in" type="submit" />
                <StyledLoginParagraph>
                  Don't have an account <br />
                  <StyledGreenLink as={Link} to="/register">Register Here</StyledGreenLink>
                </StyledLoginParagraph>
              </StyledSpaceBetween>
            </Form>
          </StyledPadding>
        </StyledInnerWrapper>
      </StyledCenter>
    </>
  );
}
