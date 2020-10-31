import React from "react";

import { StyledCenter, StyledHeader } from "root/css";

export default function Home({ userData }) {
  return (
    <>
      <StyledCenter>
        <StyledHeader>Welcome back {userData.user.displayName}!</StyledHeader>
      </StyledCenter>
    </>
  );
}
