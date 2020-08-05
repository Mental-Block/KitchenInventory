import styled from "styled-components";

const ShadowBox = styled.div`
  max-width: 480px;
  width: 480px;
  padding: 2em;
  margin: auto auto;
  box-shadow: -5px 5px 20px ${(props) => props.theme.grey},
    5px 5px 20px ${(props) => props.theme.grey};
  border-radius: 8px;
  background: ${(props) => props.theme.white};
`;

export default ShadowBox;
