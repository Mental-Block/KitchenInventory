import styled from "styled-components";
import { devices } from "../../css/devices";

export const StyledBackground = styled.div`
  position: relative;
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;
  zoom: 1;
  text-align: ${(props) =>
    props.src === "./images/banner-contact.png" ? "center" : "start"};

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: ${(props) => props.theme.black};
    opacity: 0.4;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 2.5rem;
  text-shadow: 6px 4px 6px ${(props) => props.theme.black};
  margin: 0 0 0.25em 0;
  line-height: 1.25em;
  color: ${(props) => props.theme.white};
`;

export const StyledSubHeader = styled.h2`
  font-size: 1.75rem;
  margin: 0.5em 0 1em 0;
  line-height: 1.25em;
  text-shadow: 4px 4px 6px ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
`;

export const StyledContainer = styled.div`
  padding: 4em 1rem;

  @media ${devices.mobileL} {
    padding: 4em 3em;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;
