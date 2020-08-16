import styled from "styled-components";
import { devices } from "../../css/devices";

export const StyledBackground = styled.div`
  :nth-child(even) {
    background-color: ${(props) => props.theme.grey};
  }

  :nth-child(odd) {
    background-color: ${(props) => props.theme.white};
  }
`;

export const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  line-height: 1.25em;
  margin-bottom: 0.5em;
`;

export const StyledImage = styled.img`
  border-radius: 8px;

  @media ${devices.laptop} {
    width: 360px;
    height: 320px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 500px;
  display: grid;
  margin: auto;
  padding: 4em 1rem;

  @media ${devices.mobileL} {
    padding: 4em 3em;
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

export const StyledParagraph = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  line-height: 1.8rem;
  margin: 1em 0;
`;
