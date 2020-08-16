import React from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

import Input from "./input";

import { StyledInnerWrapper, StyledCenter } from "../../css/wrapper";
import { StyledGreenButton } from "../../css/button";
import { StyledShadowBox, StyledLoginContainer } from "./styled";

export default function Form({
  inputs,
  btnText,
  fetchURL,
  fetchOptions,
  login,
}) {
  const methods = useForm();

  const submit = async (data, e) => {
    console.log(data);
    e.target.reset();
    fetchOptions.body = JSON.stringify(data);

    console.log(fetchOptions);

    await fetch(fetchURL, fetchOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <StyledCenter>
        <StyledInnerWrapper>
          <FormProvider {...methods}>
            <StyledShadowBox onSubmit={methods.handleSubmit(submit)}>
              {inputs.map((input, i) => {
                return (
                  <Input
                    key={i}
                    name={input.name}
                    label={input.label}
                    textarea={input.textarea}
                    type={input.type}
                  />
                );
              })}
              {login ? (
                <StyledLoginContainer>
                  <StyledGreenButton value="submit" type="submit">
                    {btnText}
                  </StyledGreenButton>
                  <p>
                    Don't have an account <br />
                    <Link to="/register">Register Here</Link>
                  </p>
                </StyledLoginContainer>
              ) : (
                <StyledGreenButton value="submit" type="submit">
                  {btnText}
                </StyledGreenButton>
              )}
            </StyledShadowBox>
          </FormProvider>
        </StyledInnerWrapper>
      </StyledCenter>
    </>
  );
}
