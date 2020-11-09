import React from "react";

import Card from "../shared/card"

import {StyledHeader, StyledCardGrid} from "root/css";

import useFetch from "root/use/useFetch"

export default function ViewAll({userData}) {
  const { data, loading } = useFetch(
    "/api/items/all",
    { method: "GET", headers: { "x-auth-token": userData.token } }
  );
  
  return (
    <>
      <StyledCardGrid>
        {!loading && data.length !== 0 ? data.map((props) => 
          <Card key={props._id} {...props}/>) 
        : <StyledHeader>Loading Items...</StyledHeader>
        }
      </StyledCardGrid>
    </>
  );
}

