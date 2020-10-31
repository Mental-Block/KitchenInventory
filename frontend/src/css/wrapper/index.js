import styled from "styled-components";
import { sizes } from "../devices";

export const StyledContentWrapper = styled.div`
  position: relative;
  max-width: ${sizes.desktop};
  margin: 0 auto;
  background-color: ${(props) => props.theme.snow};
  box-shadow: -5px 5px 20px ${(props) => props.theme.grey}, 5px 5px 20px ${(props) => props.theme.grey};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const StyledPageInnerWrapper = styled.div`
  position: relative;
  left: 0;
  right: 0;
  width: 100%;
  min-height: calc(100vh - 86px);
  margin-top: 86px;
  /* position: fixed; navbar, not position: static; so we need margin-top*/
`;

export const StyledPageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: calc(100vh - 86px);
`;

export const StyledInnerWrapper = styled.div`
  max-width: ${sizes.laptop};
  margin: 0 auto;
`;
