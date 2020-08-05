import styled from "styled-components";
import { flexCenterCenter, flexColumn } from "../../layout/flex";

const StyledFooter = styled.footer`
  padding: 3em;
  background-color: ${(props) => props.theme.black};
  ${flexCenterCenter};
  ${flexColumn};
`;

export default StyledFooter;
