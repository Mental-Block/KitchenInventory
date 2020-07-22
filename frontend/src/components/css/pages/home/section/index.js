import React from "react";
import Header from "./Header";
import Paragraph from "./Text";
import Image from "./Image";
import Container from "./Container";
import Background from "./Background";

export default function Section({ HeaderText, ParagraphText, ImageURL }) {
  return (
    <>
      <Background>
        <div className={"innerWrapper"}>
          <Container>
            <div className={"text-container"}>
              <Header>{HeaderText}</Header>
              <Paragraph>{ParagraphText}</Paragraph>
            </div>
            <div className={"image-container"}>
              <Image src={ImageURL} />
            </div>
          </Container>
        </div>
      </Background>
    </>
  );
}
