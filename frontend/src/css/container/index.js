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

export const StyledDesktopButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width : 212.5px;
  display: flex;
  justify-content: ${(props) => !props.state ? "flex-end" : "space-between"} ;
  align-items: center;
  
`;

export const StyledDeleteButtonContainer = styled.div`
  ${flexSpaceCenter}
  ${flexColumn}

  button{
    margin: 0.5rem;
  }

 @media ${devices.tablet}{
  ${flexRow}
 }
`