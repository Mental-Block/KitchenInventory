import React from "react";
import { Link } from "react-router-dom";

import {
  StyledBackground,
  StyledHeader,
  StyledSubHeader,
  StyledContainer,
} from "./styled";
import { StyledInnerWrapper } from "../../css/wrapper";
import { StyledGreenButton } from "../../css/button";

export default function Banner({
  src,
  headerText,
  subHeaderText,
  btnText,
  to,
}) {
  return (
    <>
      <StyledBackground src={src}>
        <StyledInnerWrapper>
          <StyledContainer>
            <StyledHeader>{headerText}</StyledHeader>
            {subHeaderText ? (
              <StyledSubHeader>{subHeaderText}</StyledSubHeader>
            ) : null}
            {btnText ? (
              <StyledGreenButton as={Link} to={to}>
                {btnText}
              </StyledGreenButton>
            ) : null}
          </StyledContainer>
        </StyledInnerWrapper>
      </StyledBackground>
    </>
  );
}
