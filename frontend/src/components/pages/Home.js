import React from "react";

import { InnerWrapper } from "../css/layout/wrapper";
import { HomeContainer } from "../css/layout/container";

import { DefaultImg } from "../css/reusables/img";
import { DefaultParagraph } from "../css/reusables/paragraph";
import { GreenButtonLink } from "../css/reusables/link";
import {
  BannerBackground,
  GreyWhiteBackground,
} from "../css/reusables/background";
import { MainHeader, SubHeader, DefaultHeader } from "../css/reusables/header";

export default function Home() {
  return (
    <>
      <BannerBackground overlay url="./images/landing-background-1366.png">
        <InnerWrapper>
          <MainHeader>The virtual fridge storage system!</MainHeader>
          <SubHeader>
            The easier way to mange all your virtual fridge contents.
          </SubHeader>
          <GreenButtonLink to="/register">Register Today!</GreenButtonLink>
        </InnerWrapper>
      </BannerBackground>

      <Section
        header="Add And Delete Fridge Contents"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              molestie dolor id risus faucibus, vel placerat nulla rhoncus.
              Donec porta nulla in iaculis feugiat. Vestibulum a odio a ante
              pretium placerat. Maecenas quis fringilla tellus. Etiam
              sollicitudin nisl eu enim iaculis dapibus. Donec facilisis gravida
              nulla, vel egestas tortor scelerisque id. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Proin molestie dolor id risus
              faucibus, vel placerat nulla rhoncus. Donec porta nulla in iaculis
              feugiat. Vestibulum a odio a ante pretium placerat. Maecenas quis
              fringilla tellus. Etiam sollicitudin nisl eu enim iaculis dapibus.
              Donec facilisis gravida nulla, vel egestas tortor scelerisque id."
        src="./images/landing-background-414.png"
      />

      <Section
        header="Group Contents"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              molestie dolor id risus faucibus, vel placerat nulla rhoncus.
              Donec porta nulla in iaculis feugiat. Vestibulum a odio a ante
              pretium placerat. Maecenas quis fringilla tellus. Etiam
              sollicitudin nisl eu enim iaculis dapibus. Donec facilisis gravida
              nulla, vel egestas tortor scelerisque id. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Proin molestie dolor id risus
              faucibus, vel placerat nulla rhoncus. Donec porta nulla in iaculis
              feugiat. Vestibulum a odio a ante pretium placerat. Maecenas quis
              fringilla tellus. Etiam sollicitudin nisl eu enim iaculis dapibus.
              Donec facilisis gravida nulla, vel egestas tortor scelerisque id."
        src="./images/landing-background-414.png"
      />

      <Section
        header="Set Quantity And Expiration"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              molestie dolor id risus faucibus, vel placerat nulla rhoncus.
              Donec porta nulla in iaculis feugiat. Vestibulum a odio a ante
              pretium placerat. Maecenas quis fringilla tellus. Etiam
              sollicitudin nisl eu enim iaculis dapibus. Donec facilisis gravida
              nulla, vel egestas tortor scelerisque id. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Proin molestie dolor id risus
              faucibus, vel placerat nulla rhoncus. Donec porta nulla in iaculis
              feugiat. Vestibulum a odio a ante pretium placerat. Maecenas quis
              fringilla tellus. Etiam sollicitudin nisl eu enim iaculis dapibus.
              Donec facilisis gravida nulla, vel egestas tortor scelerisque id."
        src="./images/landing-background-414.png"
      />

      <Section
        header="Add Images"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            molestie dolor id risus faucibus, vel placerat nulla rhoncus. Donec
            porta nulla in iaculis feugiat. Vestibulum a odio a ante pretium
            placerat. Maecenas quis fringilla tellus. Etiam sollicitudin nisl eu
            enim iaculis dapibus. Donec facilisis gravida nulla, vel egestas
            tortor scelerisque id. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin molestie dolor id risus faucibus, vel
            placerat nulla rhoncus. Donec porta nulla in iaculis feugiat.
            Vestibulum a odio a ante pretium placerat. Maecenas quis fringilla
            tellus. Etiam sollicitudin nisl eu enim iaculis dapibus. Donec
            facilisis gravida nulla, vel egestas tortor scelerisque id."
        src="./images/landing-background-414.png"
      />
    </>
  );
}

function Section({ header, paragraph, src }) {
  return (
    <GreyWhiteBackground>
      <InnerWrapper>
        <HomeContainer>
          <DefaultHeader>{header}</DefaultHeader>
          <DefaultParagraph>{paragraph}</DefaultParagraph>
          <DefaultImg src={src} />
        </HomeContainer>
      </InnerWrapper>
    </GreyWhiteBackground>
  );
}
