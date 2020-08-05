import styled from "styled-components";

const DividerLine = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 300px;
  max-width: 100%;
  height: 3px;
  margin: 1.25em 0 1em 0;
`;

export default DividerLine;
