import React from "react";

import { StyledCenter, StyledGreenButton } from "root/css";

import {CATEGORIES} from "./defaultData"

export default function ViewCategories({ userData }) {
  return (
    <>
      <StyledCenter>
        {
          [...CATEGORIES].map(({name}, key) => <StyledGreenButton key={key}>{name}</StyledGreenButton>)
        }
      </StyledCenter>
    </>
  );
}
