import React from "react";
import Header from "./Header";
import Container from "./Container";
import Paragraph from "./Text";
import Background from "./Background";

export default function Section({ HeaderText, ParagraphText, ImageURL }) {
  return (
    <>
      <Container>
        <div>
          <Header>{HeaderText}</Header>
          <Paragraph>{ParagraphText}</Paragraph>
        </div>
        <Background url={ImageURL} />
      </Container>
    </>
  );
}
