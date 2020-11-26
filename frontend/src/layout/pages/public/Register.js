import React, { useContext } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

import UserContext from "root/context/UserContext";

import { Form, Input, WatchedInput } from "root/components/form";

import customFetch from "root/function/customFetch";
import setErrorMessage from "root/function/setErrorMessage";

import { StyledGreenButton, StyledInnerWrapper, StyledPadding } from "root/css";
import { StyledCenter } from "../../../css/container";

export default function Register() {
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  const methods = useForm({ validateCriteriaMode: "all" });

  const login = async (email, password) => {
    const response = await customFetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        loginEmail: email,
        loginPassword: password,
      }),
    });

    if (response.message) setErrorMessage(methods.setError, { ...response });
    else {
      const { user, token } = response
      setUserData({ token: token, user: user });
      localStorage.setItem("auth-token", token);
      history.push(`/user/${user._id}`);
    }
  }

  const register = async (data, event) => {
    event.preventDefault();

    const response = await customFetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.message) setErrorMessage(methods.setError, { ...response });
    else login(data.registerEmail, data.registerPassword)
  };

  return (
    <>
      <StyledCenter>
        <StyledInnerWrapper>
          <StyledPadding>
            <Form onSubmit={register} methods={methods}>
              <Input
                rules={{
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "This is not a valid email address",
                  },
                  required: {
                    value: true,
                    message: "This is field is required",
                  },
                }}
                name="registerEmail"
                label="Email"
                placeholder="Email"
                type="text"
              />

              <Input
                rules={{
                  required: {
                    value: true,
                    message: "This is field is required",
                  },
                  minLength: {
                    value: 8,
                    message: "Password can't be shorter then 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/,
                    message:
                      "Password must contain at least 1 letter, at least 1 number, and be longer than 8 characters",
                  },
                }}
                name="registerPassword"
                label="Password"
                type="password"
                placeholder="Password"
              />

              <WatchedInput
                watch="registerPassword"
                rules={{
                  required: {
                    value: true,
                    message: "This is field is required",
                  },
                }}
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
              />

              <Input
                rules={{
                  maxLength: {
                    value: 15,
                    message: "This input exceed maxLength of 15",
                  },
                  pattern: {
                    value: /^[A-Z a-z]+$/,
                    message: "Characters only please",
                  },
                }}
                name="registerDisplayName"
                placeholder="Display Name"
                label="Display Name"
                type="text"
              />

              <StyledGreenButton value="Register" as="input" type="submit" />
            </Form>
          </StyledPadding>
        </StyledInnerWrapper>
      </StyledCenter>
    </>
  );
}
