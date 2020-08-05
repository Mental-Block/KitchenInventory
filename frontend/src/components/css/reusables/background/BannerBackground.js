import styled from "styled-components";

const Background = styled.div`
  position: relative;
  background: url(${(props) => props.url}) no-repeat center center;
  background-size: cover;
  zoom: 1;
  min-height: ${(props) => (props.minHeight ? props.minHeight : "auto")};

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: ${(props) =>
      props.overlay ? (props) => props.theme.black : "none"};
    opacity: 0.4;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export default Background;
