import React from "react";

import { StyledInnerWrapper, StyledSectionPadding, StyledImageBackground, StyledOverlayBackground } from "root/css";

export default function Banner({ src, children }) {
  return (
    <>
      <StyledImageBackground src={src}>
        <StyledOverlayBackground>
          <StyledInnerWrapper>
            <StyledSectionPadding>{children}</StyledSectionPadding>
          </StyledInnerWrapper>
        </StyledOverlayBackground>
      </StyledImageBackground>
    </>
  );
}
