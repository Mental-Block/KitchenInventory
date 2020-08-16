import styled from "styled-components";
import { sizes } from "../devices";
import { flexColumn, flexCenterCenter } from "../flex";

export const StyledPageWrapper = styled.div`
  ${flexColumn}
  position: relative;
  max-width: ${sizes.desktop};
  margin: 0 auto;
  background-color: ${(props) => props.theme.snow};
  box-shadow: -5px 5px 20px ${(props) => props.theme.grey},
    5px 5px 20px ${(props) => props.theme.grey};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const StyledInnerWrapper = styled.div`
  max-width: ${sizes.laptop};
  margin: 0 auto;
`;

export const StyledCenter = styled.div`
  min-height: inherit;
  ${flexCenterCenter}
`;
