import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import UserContext from "root/context/UserContext";

import {Form, Input} from "../shared/form";

import customFetch from "root/function/customFetch";
import setErrorMessage from "root/function/setErrorMessage";

import { StyledGreenButton } from "root/css";
import { useHistory } from "react-router";

export default function Register() {
  const { setUserData } = useContext(UserContext);
  const { push } = useHistory();

  const methods = useForm({ validateCriteriaMode: "all" });
  const { register, setError, watch } = methods;
  const watchRegisterPassword = watch("registerPassword");

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const register = await customFetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (register.message) setErrorMessage(setError, { ...register });
    else {
      const user = await customFetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          loginEmail: data.registerEmail,
          loginPassword: data.registerPassword,
        }),
      });

      setUserData({ token: user.token, user: user.user });
      localStorage.setItem("auth-token", user.token);
      push(`/user/${user.user.id}`);
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit} methods={methods}>
        <Input
              register={register({
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "This is not a valid email address",
                },
                required: {
                  value: true,
                  message: "This is field is required",
                },
              })}
              name="registerEmail"
              label="Email"
              placeholder="Email"
              type="text"
            />

            <Input
              register={register({
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
              })}
              name="registerPassword"
              label="Password"
              type="password"
              placeholder="Password"
            />

            {watchRegisterPassword && (
              <Input
                register={register({
                  required: {
                    value: true,
                    message: "This is field is required",
                  },
                  validate: (value) => value === watchRegisterPassword || "Passwords do not match",
                })}
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
              />
            )}

            <Input
              register={register({
                maxLength: {
                  value: 15,
                  message: "This input exceed maxLength of 15",
                },
                pattern: {
                  value: /^[A-Z a-z]+$/,
                  message: "Characters only please",
                },
              })}
              name="registerDisplayName"
              placeholder="Display Name"
              label="Display Name"
              type="text"
            />

            <StyledGreenButton value="Register" as="input" type="submit" />
        </Form>
    </>
  );
}
