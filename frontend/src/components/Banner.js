import React from "react";

import { StyledInnerWrapper, StyledPadding, StyledImageBackground, StyledOverlayBackground } from "root/css";

export default function Banner({ src, children }) {
  return (
    <>
      <StyledImageBackground src={src}>
        <StyledOverlayBackground>
          <StyledInnerWrapper>
            <StyledPadding>{children}</StyledPadding>
          </StyledInnerWrapper>
        </StyledOverlayBackground>
      </StyledImageBackground>
    </>
  );
}
