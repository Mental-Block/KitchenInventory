import styled from "styled-components";

const Background = styled.div`
  position: relative;
  background: url(${(props) => props.url}) no-repeat center center;
  background-size: cover;
  zoom: 1;

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

export default Background;
