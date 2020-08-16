import styled from "styled-components";

export const StyledFormControl = styled.div`
  margin: 2rem 0;

  textarea {
    max-width: 100%;
    resize: none;
    height: 200px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin: 0.25rem 0;
  text-indent: 0.2rem;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.grey};
  padding: 0.75rem 0;
  text-indent: 0.75rem;
  margin: 0.5rem 0;
`;

export const StyledErrorText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.red};
`;
