import styled from "styled-components";
import { sizes } from "../devices";

const RootWrapper = styled.div`
  max-width: ${sizes.desktop};
  background-color: ${(props) => props.theme.snow};
  margin: 0 auto;
  box-shadow: -5px 5px 20px ${(props) => props.theme.grey},
    5px 5px 20px ${(props) => props.theme.grey};
`;

export default RootWrapper;
