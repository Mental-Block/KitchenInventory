import styled from "styled-components";

const Background = styled.div`
  width: 400px;
  height: 400px;
  background: url(${(props) => props.url}) no-repeat center center;
  background-size: contain;
`;

export default Background;
