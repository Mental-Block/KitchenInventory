import styled from "styled-components";
import { flexRow, flexColumn, flexSpaceCenter, flexCenterCenter } from "../flex";

import { devices } from "../devices";

export const StyledSpaceBetween = styled.div`
  ${flexRow}
  ${flexSpaceCenter}
`;

export const StyledCenter = styled.div`
  ${flexCenterCenter}
  ${flexColumn}
  min-height: inherit;
`;
