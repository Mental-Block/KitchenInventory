import React from "react";
import { FormProvider } from "react-hook-form";

import { StyledCenter, StyledForm } from "root/css"

export default function Form({ onSubmit, methods, children }) {
  return (
    <StyledCenter>
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </StyledForm>
      </FormProvider>
    </StyledCenter>
  );
}
