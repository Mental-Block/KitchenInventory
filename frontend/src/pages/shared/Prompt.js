import React, { useContext } from "react";
import {useForm} from "react-hook-form";

import {Form, Input} from "../shared/form"

import UserContext from "root/context/UserContext";

import customFetch from "root/function/customFetch";
import setErrorMessage from "root/function/setErrorMessage";

import {
  StyledRedButton,
  StyledSpaceBetween,
  StyledGreenButton,
  StyledOverlayBackground,
  StyledPageWrapper,
  StyledParagraph
} from "root/css";

export default function Prompt({ displayPrompt, message, reload, url, input}) {
  const { userData } = useContext(UserContext);
  const methods = useForm();
  const { register, setError } = methods;

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const response = await customFetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userData.token,
      },
      body: JSON.stringify(data),
    });

    if (response.message) setErrorMessage(setError, { ...response });
    else {displayPrompt(false); reload(true); }
  };

  return (
    <>
      <StyledOverlayBackground>
        <StyledPageWrapper>
          <Form onSubmit={onSubmit} methods={methods}>
            <StyledParagraph>{message}</StyledParagraph>
             <Input
                  register={register({
                    required: {
                      value: true,
                      message: "This is field is required",
                    },
                    maxLength: {
                      value: 30,
                      message: "Name can't exceed max length of 30 characters",
                    },
                    pattern: {
                      value: /^[A-Z a-z]+$/,
                      message: "Characters only please",
                    },
                  })}
                  {...input}
                />
                <StyledSpaceBetween>
                  <StyledGreenButton as="input" value="Add +" type="submit" />
                  <StyledRedButton as="input" type="button" value="Never mind" type="button" onClick={() => displayPrompt(false)}/>
              </StyledSpaceBetween>
           </Form>     
        </StyledPageWrapper>
      </StyledOverlayBackground>
    </>
  );
}
