import styled from "styled-components";
import { devices } from "../../layout/devices";

const Image = styled.img`
  border-radius: 8px;

  @media ${devices.laptop} {
    width: 360px;
    height: 320px;
  }
`;

export default Image;
