import React from "react";

import { StyledInnerWrapper, StyledSectionPadding, StyledAltBackground, StyledSection } from "root/css";

export default function Section({ children }) {
  return (
    <>  
      <StyledAltBackground>
        <StyledInnerWrapper>
          <StyledSectionPadding>
            <StyledSection>
              {children}
            </StyledSection>
          </StyledSectionPadding>
        </StyledInnerWrapper>
      </StyledAltBackground>
    </>
  );
}
