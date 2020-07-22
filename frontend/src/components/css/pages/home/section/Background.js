import styled from "styled-components";

const Background = styled.div`
  :nth-child(even) {
    background-color: ${(props) => props.theme.grey};
  }

  :nth-child(odd) {
    background-color: ${(props) => props.theme.white};
  }
`;

export default Background;
