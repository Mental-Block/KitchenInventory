import styled from "styled-components";

import { flex } from "../../layout/flex";

const Container = styled.div`
  ${flex}
  padding: 4em 6em;
  :nth-child(even) {
    background-color: ${(props) => props.theme.grey};
  }
  :nth-child(odd) {
    background-color: ${(props) => props.theme.white};
  }
`;

export default Container;
