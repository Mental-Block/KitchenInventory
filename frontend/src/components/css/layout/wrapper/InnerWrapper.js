import styled from "styled-components";
import { sizes, devices } from "../devices";

const Wrapper = styled.div`
  max-width: ${sizes.laptop};
  margin: 0 auto;
  padding: 4em 1rem;
  min-height: inherit;
  @media ${devices.mobileL} {
    padding: 4em 3em;
  }
`;

export default Wrapper;
