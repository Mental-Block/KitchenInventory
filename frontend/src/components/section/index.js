import React from "react";

import { StyledInnerWrapper } from "../../css/wrapper";
import {
  StyledBackground,
  StyledContainer,
  StyledHeader,
  StyledParagraph,
  StyledImage,
} from "./styled";

export default function Section({ header, paragraph, src }) {
  return (
    <StyledBackground>
      <StyledInnerWrapper>
        <StyledContainer>
          <StyledHeader>{header}</StyledHeader>
          <StyledParagraph>{paragraph}</StyledParagraph>
          <StyledImage src={src} />
        </StyledContainer>
      </StyledInnerWrapper>
    </StyledBackground>
  );
}
