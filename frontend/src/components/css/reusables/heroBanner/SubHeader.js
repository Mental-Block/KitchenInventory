import styled from "styled-components";

const SubHeader = styled.h2`
  font-size: 2rem;
  margin: 0;
  line-height: 1.25em;
  text-shadow: 4px 4px 6px ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
`;

export default SubHeader;
