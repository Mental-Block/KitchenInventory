import styled from "styled-components";
import { devices } from "../../layout/devices";

const StyledBurger = styled.div`
  cursor: pointer;
  height: auto;
  width: auto;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.5s linear;
  background-color: ${(props) =>
    props.toggleValue ? props.theme.grey : "none"};

  @media ${devices.tablet} {
    display: none;
  }

  div:not(:nth-child(4)) {
    width: 28px;
    height: 6px;
    background-color: ${(props) => props.theme.black};
  }

  div:nth-child(4) {
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    cursor: default;
  }

  div:nth-child(2) {
    margin: 0.3rem 0;
  }
`;

export default StyledBurger;
