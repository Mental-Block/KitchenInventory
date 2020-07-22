import { css } from "styled-components";
import { sizes, devices } from "./devices";

const innerWrapper = css`
  .innerWrapper {
    max-width: ${sizes.laptop};
    padding: 0 16px;
    margin: 0 auto;
    padding: 4em 1.9em;

    @media ${devices.mobileL} {
      padding: 4em 3em;
    }

    @media ${devices.tablet} {
      padding: 4em;
    }
  }
`;

export default innerWrapper;
