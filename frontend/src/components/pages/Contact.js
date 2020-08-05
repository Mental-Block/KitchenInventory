import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { InnerWrapper } from "../css/layout/wrapper";
import { ContactContainer } from "../css/layout/container";
import { BannerBackground } from "../css/reusables/background";
import { DefaultLabel } from "../css/reusables/label";
import { ShadowBox } from "../css/reusables/shadowBox";
import { GreenButton } from "../css/reusables/button";
import { DefaultInput } from "../css/reusables/input";

export default function Contact() {
  const { handleSubmit } = useForm({
    validateCriteriaMode: "all",
  });

  const submit = async (data, e) => {
    e.target.reset();

    await fetch("/contact/", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <BannerBackground
        minHeight={"inherit"}
        url={"./images/fork-background.svg"}
      >
        <InnerWrapper>
          <ContactContainer>
            <ShadowBox as="form" onSubmit={handleSubmit(submit)}>
              <Input name="name" label="Name" />
              <Input name="email" label="Email" />
              <Input name="subject" label="Subject" />
              <Input name="Message" label="Message" textarea />
              <GreenButton title="Submit" value="submit" type="submit">
                Submit
              </GreenButton>
            </ShadowBox>
          </ContactContainer>
        </InnerWrapper>
      </BannerBackground>
    </>
  );
}

function Input({ name, label, textarea }) {
  const { register, errors } = useForm({
    validateCriteriaMode: "all",
  });

  return (
    <>
      <DefaultLabel>
        {label}
        <DefaultInput
          ref={register({
            required: {
              value: true,
              message: "This is field is required",
            },
            maxLength: {
              value: 15,
              message: "please keep characters under 15",
            },
            minLength: {},
          })}
          name={name}
          id={name}
          placeholder={label}
          as={textarea ? "textarea" : "input"}
        />
      </DefaultLabel>

      <ErrorMessage errors={errors} name="firstName">
        {({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      </ErrorMessage>
    </>
  );
}
