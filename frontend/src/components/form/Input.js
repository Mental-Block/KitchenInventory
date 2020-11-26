import React from "react";
import { useFormContext } from "react-hook-form";
import { StyledFormControl, StyledLabel, StyledInput } from "root/css";
import ErrorMessage from "./ErrorMessage";

export default function Input({ children, ...props }) {
  const { clearErrors, register } = useFormContext();

  return (
    <>
      <StyledFormControl sm={props.sm}>
        <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
        <StyledInput
          onChange={() => clearErrors(props.name)}
          ref={register(props.rules)}
          {...props}>
          {children}
        </StyledInput>
        <ErrorMessage name={props.name} />
      </StyledFormControl>
    </>
  );
}
