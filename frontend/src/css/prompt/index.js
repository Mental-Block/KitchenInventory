import styled from "styled-components";

import { StyledOverlayBackground } from "../background"

export const StyledPrompt = styled(StyledOverlayBackground)`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 1;
    margin-bottom: 600px;

    * {
        z-index: 2;
    }
`; 