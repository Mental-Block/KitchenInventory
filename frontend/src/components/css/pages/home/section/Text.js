import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  line-height: 1.8rem;
  margin-top: 0;
`;

export default Paragraph;
