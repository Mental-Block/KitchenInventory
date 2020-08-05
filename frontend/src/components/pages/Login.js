import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { ContactContainer } from "../css/layout/container";

import { ShadowBox } from "../css/reusables/shadowBox";
import { GreenButton } from "../css/reusables/button";

export default function Login() {
  return (
    <>
      <ContactContainer>
        <ShadowBox as="form">
          <GreenButton title="Submit" value="submit" type="submit">
            Submit
          </GreenButton>
        </ShadowBox>
      </ContactContainer>
    </>
  );
}
