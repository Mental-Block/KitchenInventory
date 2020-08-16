import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import {
  StyledInput,
  StyledLabel,
  StyledFormControl,
  StyledErrorText,
} from "./styled";

export default function Input({ name, label, textarea, type }) {
  const { register, errors } = useFormContext({
    criteriaMode: "all",
  });

  return (
    <>
      <StyledFormControl>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          ref={register({
            required: {
              value: true,
              message: "This is field is required",
            },
          })}
          name={name}
          id={name}
          placeholder={label}
          type={type}
          as={textarea === true ? "textarea" : "input"}
        />

        <StyledErrorText>
          <ErrorMessage errors={errors} name={name}>
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            }
          </ErrorMessage>
        </StyledErrorText>
      </StyledFormControl>
    </>
  );
}
