import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage as Error } from "@hookform/error-message";

import { StyledErrorText } from "root/css";

export default function ErrorMessage({ name }) {
  const { errors } = useFormContext();

  return (
    <>
      <StyledErrorText>
        <Error errors={errors} name={name}>
          {({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          }
        </Error>
      </StyledErrorText>
    </>
  );
}
