import { Link } from "react-router-dom";
import styled from "styled-components";
import { cssGreenButton } from "../button/";

const GreenButtonLink = styled(Link)`
  ${cssGreenButton}
  text-decoration: none;
`;

export default GreenButtonLink;
