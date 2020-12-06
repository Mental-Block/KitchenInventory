import React from "react";
import { createPortal } from "react-dom"
import { useForm } from "react-hook-form";

import { Form, Input } from "root/components/form"

import customFetch from "root/function/customFetch";
import setErrorMessage from "root/function/setErrorMessage";

import {
  StyledRedButton,
  StyledSpaceBetween,
  StyledGreenButton,
  StyledPageInnerWrapper,
  StyledPageWrapper,
  StyledParagraph,
  StyledPrompt
} from "root/css";

export default function Prompt({ ...props }) {
  if (!props.open) return null
  const methods = useForm();
  const { reload, close } = props

  const onSubmit = async (data, event) => {
    event.preventDefault();

    if (props.fetch.options.headers["content-type"] === "application/json")
      props.fetch.options.body = JSON.stringify(data);

    const response = await customFetch(props.fetch.url, props.fetch.options);

    if (response.message) setErrorMessage(methods.setError, { ...response });
    else { reload(); close(); }
  };

  return createPortal(
    <StyledPageWrapper >
      <StyledPrompt>
        <StyledPageInnerWrapper>
          <Form onSubmit={onSubmit} methods={methods}>
            <StyledParagraph>{props.message}</StyledParagraph>
            {props.input ? <Input {...props.input} /> : null}
            <StyledSpaceBetween>
              <StyledGreenButton type="submit">{props.btnText.success}</StyledGreenButton>
              <StyledRedButton type="button" onClick={props.close}>{props.btnText.failed}</StyledRedButton>
            </StyledSpaceBetween>
          </Form>
        </StyledPageInnerWrapper>
      </StyledPrompt>
    </StyledPageWrapper>
    , document.getElementById("prompt")
  )
}
