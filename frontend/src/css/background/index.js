import styled from "styled-components";

export const StyledImageBackground = styled.div`
  position: relative;
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;
  zoom: 1;
`;

export const StyledOverlayBackground = styled.div`
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background: ${(props) => props.theme.black};
    opacity: 0.4;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const StyledAltBackground = styled.div`
  background-color: ${(props) => props.theme.grey};

  :nth-child(even) {
    background-color: ${(props) => props.theme.snow};
  }
`;
