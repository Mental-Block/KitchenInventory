import React from "react";
import { useFormContext } from "react-hook-form";
import { StyledFormControl, StyledLabel, StyledInput } from "root/css";

export default function Input({ register, name, label, children, ...rest }) { 
  const {clearErrors} = useFormContext();
  
  return (
    <>
      <StyledFormControl>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <StyledInput
          onChange={() => clearErrors(name)}
          name={name}
          ref={register}
          {...rest}> 
          {children}
          </StyledInput>
      </StyledFormControl>
    </>
  );
}
