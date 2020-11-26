import React, { useState } from "react";

import Item from "./Item"

import { StyledCenter, StyledGreenButton, StyledHeader, StyledRedButton, StyledItemGrid } from "root/css";

import useFetch from "root/use/useFetch"
import customFetch from "root/function/customFetch"

import { CATEGORIES } from "./defaultData"
import Prompt from "../Prompt";



export default function ViewCategories({ userData }) {
  const [categoryValue, toggleCategory] = useState(null);
  const { data, loading } = useFetch(
    "/api/categories/all",
    { method: "GET", headers: { "x-auth-token": userData.token } }
  );

  const getCategoryItems = async (data) => {
    const response = await customFetch(
      "/api/items/category",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userData.token
        },
        body: JSON.stringify({ categoryName: data }),
      });

    if (response.message) console.log("bad request")
    else toggleCategory(response)
  }

  const deleteCategory = async (data) => {
    const response = await customFetch(
      `/api/category/delete/${userData.user.id}`,
      {
        method: "POST",
        headers: { "x-auth-token": userData.token },
      });

    console.log(response);
  }

  return (
    <>
      { !loading ? <>
        {[...CATEGORIES, ...data].map(({ name, _id }, key) =>
          <StyledGreenButton onClick={() => getCategoryItems(name)} key={key} id={_id}>{name}</StyledGreenButton>)
        }
        <StyledRedButton onClick={() => deleteCategory(name)}>Delete Categories</StyledRedButton>
      </> : <StyledCenter><StyledHeader>Loading Categories...</StyledHeader></StyledCenter>
      }


      {categoryValue ?
        categoryValue.length !== 0 ?
          <StyledItemGrid>
            {
              categoryValue.map((props) => <Item key={props._id} {...props} />)
            }
          </StyledItemGrid>
          : <StyledCenter><StyledHeader>no items match these categories</StyledHeader></StyledCenter>
        : null
      }
    </>
  );
}
