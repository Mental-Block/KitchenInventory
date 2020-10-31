import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import {Input, Form} from "../shared/form";

import UserContext from "root/context/UserContext";

import customFetch from "root/function/customFetch";
import setErrorMessage from "root/function/setErrorMessage";

import {
  StyledSpaceBetween,
  StyledGreenButton,
  StyledLoginParagraph,
  StyledGreenLink,
} from "root/css";

export default function Login() {
  const { setUserData } = useContext(UserContext);
  const { push } = useHistory();

  const methods = useForm({ validateCriteriaMode: "all" });
  const { register, setError } = methods;

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const response = await customFetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.message) setErrorMessage(setError, { ...response });
    else {
      setUserData({ token: response.token, user: response.user });
      localStorage.setItem("auth-token", response.token);
      push(`/user/${response.user.id}`);
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit} methods={methods}>
        <Input register={register()} name="loginEmail" label="Email" type="text" placeholder="Email" />
        <Input register={register()} name="loginPassword" label="Password" type="password" placeholder="Password" />
        <StyledSpaceBetween>
          <StyledGreenButton as="input" value="Log in" type="submit" />
          <StyledLoginParagraph>
            Don't have an account <br />
              <StyledGreenLink as={Link} to="/register">Register Here</StyledGreenLink>
          </StyledLoginParagraph>
        </StyledSpaceBetween>
      </Form>   
    </>
  );
}
