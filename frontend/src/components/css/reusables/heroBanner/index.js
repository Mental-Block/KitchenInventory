import React from "react";

import Background from "./Background";
import Container from "./Container";
import Header from "./Header";
import SubHeader from "./SubHeader";

import { GreenButton } from "../Button";

export default function HeroBanner({
  ImageURL,
  HeaderText,
  SubHeaderText,
  ButtonText,
}) {
  return (
    <>
      <Background url={ImageURL}>
        <Container>
          <Header>{HeaderText}</Header>
          <SubHeader>{SubHeaderText}</SubHeader>
          <GreenButton>{ButtonText}</GreenButton>
        </Container>
      </Background>
    </>
  );
}
