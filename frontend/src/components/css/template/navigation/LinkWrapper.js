import styled from "styled-components";
import { devices } from "../../layout/devices";
import {
  flexColumn,
  flexCenterCenter,
  flexRow,
  flexSpace,
} from "../../layout/flex";

const LinkWrapper = styled.div`
  position: absolute;
  padding: 2rem 0;
  bottom: -312px;
  left: 0px;
  right: 0px;
  width: 100%;
  opacity: ${(props) => (props.toggleValue ? "1" : "0")};
  background: ${(props) => props.theme.grey};
  transition: visibility 0s linear 0.5s, opacity 0.5s linear;
  transition-delay: ${(props) => (props.toggleValue ? "0s" : "none")};
  visibility: ${(props) => (props.toggleValue ? "visible" : "hidden")};
  ${flexCenterCenter};
  ${flexColumn};

  @media ${devices.tablet} {
    opacity: initial;
    position: initial;
    visibility: initial;
    width: 360px;
    margin-right: 0.8rem;
    background: none;
    ${flexRow};
    ${flexSpace};
  }
`;

export default LinkWrapper;
