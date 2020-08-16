import React from "react";

import { Form } from "../components";

export default function Contact() {
  return (
    <>
      <Form
        fetchURL="/contact/"
        fetchOptions={{
          mode: "cors",
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }}
        btnText="Submit"
        inputs={[
          {
            name: "name",
            label: "Name",
            type: "text",
          },
          {
            name: "email",
            label: "Email",
            type: "email",
          },
          {
            name: "subject",
            label: "Subject",
            type: "text",
          },
          {
            name: "message",
            label: "Message",
            type: "text",
            textarea: true,
          },
        ]}
      />
    </>
  );
}
