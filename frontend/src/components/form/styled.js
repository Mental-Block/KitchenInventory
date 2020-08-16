import styled from "styled-components";
import { flexRow, flexSpaceCenter } from "../../css/flex";
import { devices } from "../../css/devices";

export const StyledShadowBox = styled.form`
  width: 320px;
  padding: 2em;
  margin: 6rem auto;
  box-shadow: -5px 5px 20px ${(props) => props.theme.grey},
    5px 5px 20px ${(props) => props.theme.grey};
  border-radius: 8px;
  background: ${(props) => props.theme.white};

  @media ${devices.mobileL} {
    width: 480px;
  }
`;

export const StyledLoginContainer = styled.div`
  ${flexRow}
  ${flexSpaceCenter}

  a {
    color: ${(props) => props.theme.green};
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.greenOff};
    text-decoration: underline;
  }
  p {
    padding: 0.25rem 0rem 0 0.8rem;
    line-height: 1.25rem;
  }
`;
