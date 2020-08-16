import React from "react";

import { Form } from "../components";

export default function Register() {
  return (
    <>
      <Form
        inputs={[
          {
            name: "email",
            label: "Email",
            type: "email",
          },
          {
            name: "password",
            label: "Password",
            type: "text",
          },
          {
            name: "display",
            label: "Display Name",
            type: "text",
          },
        ]}
        btnText="Register"
      />
    </>
  );
}
