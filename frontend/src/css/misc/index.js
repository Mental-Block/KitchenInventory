import styled from "styled-components";
import { devices } from "../devices";

export const StyledSection = styled.div`
  max-width: 500px;
  display: grid;
  margin: auto;

  img {
    border-radius: 8px;

    @media ${devices.laptop} {
      width: 360px;
      height: 320px;
    }
  }

  @media ${devices.laptop} {
    max-width: 100%;
    grid-template-areas: "h h" "text img";

    p {
      grid-area: text;
      padding-right: 1rem;
    }
    img {
      grid-area: img;
    }
    h1 {
      grid-area: h;
    }
  }
`;

export const StyledPadding = styled.div`
  padding: 4em 1rem;

  @media ${devices.mobileL} {
    padding: 4em 3em;
  }
`;
