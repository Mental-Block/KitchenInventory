import styled from "styled-components";
import { flex } from "../../../layout/flex";
import { devices } from "../../../layout/devices";

const Container = styled.div`
  margin: 0 auto;
  max-width: 500px;

  @media ${devices.laptop} {
    max-width: 100%;
    ${flex}
    .text-container {
      padding-right: 2em;
    }
    .image-container {
      margin-top: auto;
    }
  }
`;

export default Container;
