import styled from "styled-components";

const DefaultInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.grey};
  padding: 0.75rem 0;
  text-indent: 0.75rem;
`;

export default DefaultInput;
