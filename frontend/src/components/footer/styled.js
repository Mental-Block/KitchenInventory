import styled from "styled-components";
import { flexCenterCenter, flexColumn } from "../../css/flex";

export const StyledCopyRight = styled.p`
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  line-height: 1.25em;
`;

export const StyledDivider = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 300px;
  max-width: 100%;
  height: 3px;
  margin: 1.25em 0 1em 0;
`;

export const StyledFooter = styled.footer`
  padding: 3em;
  background-color: ${(props) => props.theme.black};
  ${flexCenterCenter};
  ${flexColumn};
`;

export const StyledLogo = styled.img`
  width: 165px;
  height: auto;
`;
