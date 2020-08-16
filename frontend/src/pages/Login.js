import React from "react";

import { Form } from "../components";

export default function Login() {
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
        ]}
        btnText="Login"
        login
      />
    </>
  );
}
