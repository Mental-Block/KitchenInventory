import React from "react";

import { StyledCenter, StyledGreenButton, StyledHeader } from "root/css";

import useFetch from "root/use/useFetch"


export default function ViewAll({userData}) {
  const { data, loading } = useFetch(
    "/api/items/all",
    { method: "GET", headers: { "x-auth-token": userData.token } }
  );

  return (
    <>
      <StyledCenter>
        {!loading ? data.map(({title, imageUrl, quantity, unitName, categoryName, _id}) => 
        <section key={_id}>
          <br></br>
          <br></br>
          <ul>
            <li>{title}</li>
            <li>{imageUrl}</li>
            <li>{quantity}</li>
            <li>{unitName}</li>
            <li>{categoryName}</li>
          </ul>
        </section>) 
        : <StyledHeader>Loading Items...</StyledHeader>
        }
      </StyledCenter>
    </>
  );
}
