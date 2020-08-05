import styled from "styled-components";
import { devices } from "../devices";

const Container = styled.div`
  max-width: 500px;
  display: grid;
  margin: auto;

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

export default Container;
