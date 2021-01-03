import React from "react";
import { Link } from "react-router-dom";

import Banner from "root/components/Banner";
import Section from "root/components/Section";

import {
  StyledGreenButton,
  StyledWhiteHeader,
  StyledWhiteSubHeader,
  StyledHeader,
  StyledParagraph,
} from "root/css";

export default function Home() {
  return (
    <>
      <Banner src="/images/landing-background-1366.png">
        <StyledWhiteHeader>The virtual fridge storage system!</StyledWhiteHeader>
        <StyledWhiteSubHeader>The easier way to mange all your virtual fridge contents.</StyledWhiteSubHeader>
        <StyledGreenButton as={Link} to="/register">
          Register Today!
        </StyledGreenButton>
      </Banner>

      <Section>
        <StyledHeader>Add Inventory</StyledHeader>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie dolor id risus faucibus, vel
          placerat nulla rhoncus. Donec porta nulla in iaculis feugiat. Vestibulum a odio a ante pretium placerat.
          Maecenas quis fringilla tellus. Etiam sollicitudin nisl eu enim iaculis dapibus. Donec facilisis gravida
          nulla, vel egestas tortor scelerisque id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          molestie dolor id risus faucibus, vel placerat nulla rhoncus. Donec porta nulla in iaculis feugiat.
          Vestibulum a odio a ante pretium placerat. Maecenas quis fringilla tellus. Etiam sollicitudin nisl eu enim
          iaculis dapibus. Donec facilisis gravida nulla, vel egestas tortor scelerisque id.
          </StyledParagraph>
        <img src="./images/add.jpeg" />
      </Section>

      <Section>
        <StyledHeader>Delete Inventory</StyledHeader>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie dolor id risus faucibus, vel
          placerat nulla rhoncus. Donec porta nulla in iaculis feugiat. Vestibulum a odio a ante pretium placerat.
          Maecenas quis fringilla tellus. Etiam sollicitudin nisl eu enim iaculis dapibus. Donec facilisis gravida
          nulla, vel egestas tortor scelerisque id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          molestie dolor id risus faucibus, vel placerat nulla rhoncus. Donec porta nulla in iaculis feugiat.
          Vestibulum a odio a ante pretium placerat. Maecenas quis fringilla tellus. Etiam sollicitudin nisl eu enim
          iaculis dapibus. Donec facilisis gravida nulla, vel egestas tortor scelerisque id.
          </StyledParagraph>
        <img src="./images/delete.jpeg" />
      </Section>

      <Section>
        <StyledHeader>Edit Inventory</StyledHeader>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie dolor id risus faucibus, vel
          placerat nulla rhoncus. Donec porta nulla in iaculis feugiat. Vestibulum a odio a ante pretium placerat.
          Maecenas quis fringilla tellus. Etiam sollicitudin nisl eu enim iaculis dapibus. Donec facilisis gravida
          nulla, vel egestas tortor scelerisque id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          molestie dolor id risus faucibus, vel placerat nulla rhoncus. Donec porta nulla in iaculis feugiat.
          Vestibulum a odio a ante pretium placerat. Maecenas quis fringilla tellus. Etiam sollicitudin nisl eu enim
          iaculis dapibus. Donec facilisis gravida nulla, vel egestas tortor scelerisque id.
          </StyledParagraph>
        <img src="./images/edit.jpeg" />
      </Section>

      <Section>
        <StyledHeader>Search Inventory</StyledHeader>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie dolor id risus faucibus, vel
          placerat nulla rhoncus. Donec porta nulla in iaculis feugiat. Vestibulum a odio a ante pretium placerat.
          Maecenas quis fringilla tellus. Etiam sollicitudin nisl eu enim iaculis dapibus. Donec facilisis gravida
          nulla, vel egestas tortor scelerisque id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          molestie dolor id risus faucibus, vel placerat nulla rhoncus. Donec porta nulla in iaculis feugiat.
          Vestibulum a odio a ante pretium placerat. Maecenas quis fringilla tellus. Etiam sollicitudin nisl eu enim
          iaculis dapibus. Donec facilisis gravida nulla, vel egestas tortor scelerisque id.
          </StyledParagraph>
        <img src="./images/search.jpeg" />
      </Section>
    </>
  );
}
