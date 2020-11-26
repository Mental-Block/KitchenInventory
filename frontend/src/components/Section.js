import React from "react";

import { StyledInnerWrapper, StyledPadding, StyledAltBackground, StyledSection } from "root/css";

export default function Section({ children }) {
  return (
    <>
      <StyledAltBackground>
        <StyledInnerWrapper>
          <StyledPadding>
            <StyledSection>
              {children}
            </StyledSection>
          </StyledPadding>
        </StyledInnerWrapper>
      </StyledAltBackground>
    </>
  );
}
