import React from "react";

import Background from "./Background";
import Container from "./Container";
import Header from "./Header";
import SubHeader from "./SubHeader";

import { GreenButtonLink } from "../../../reusables/link";

export default function HeroBanner({
  ImageURL,
  HeaderText,
  SubHeaderText,
  ButtonText,
  PageURL,
}) {
  return (
    <Background url={ImageURL}>
      <div className={"innerWrapper"}>
        <Container>
          <Header>{HeaderText}</Header>
          <SubHeader>{SubHeaderText}</SubHeader>
          <GreenButtonLink fontSize="1.2rem" to={PageURL}>
            {ButtonText}
          </GreenButtonLink>
        </Container>
      </div>
    </Background>
  );
}
