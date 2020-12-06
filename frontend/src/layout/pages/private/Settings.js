import React from "react";

import { StyledRedButton, StyledCenter, StyledGreenButton } from "root/css"

import Prompt from "root/components/Prompt";

export default function Settings({ userData }) {


  return (
    <>
      <StyledCenter>
        <StyledGreenButton>Changed Display Name</StyledGreenButton>
        <StyledRedButton>Delete Account</StyledRedButton>
      </StyledCenter>

      <Prompt />
    </>
  );
}
