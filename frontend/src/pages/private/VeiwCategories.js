import React, {useState} from "react";

import Card from "../shared/card"

import { StyledCenter, StyledGreenButton, StyledHeader, StyledRedButton, StyledCardGrid } from "root/css";

import useFetch from "root/use/useFetch"
import customFetch from "root/function/customFetch"

import {CATEGORIES} from "./defaultData"

export default function ViewCategories({ userData }) {
    const [categoryValue, toggleCategory] = useState(null);

    const { data, loading } = useFetch(
      "/api/categories/all",
      { method: "GET", headers: { "x-auth-token": userData.token }}
    );

    const getCategoryItems = async (data) => {
      const response = await customFetch(
      "/api/items/category",
      { method: "POST", 
        headers: { 
        "Content-Type": "application/json", 
        "x-auth-token": userData.token  
        },
        body: JSON.stringify({categoryName: data}),
      });

      if(response.message) console.log("bad request")
      else toggleCategory(response)
    }

    const deleteCategory = async (data) => {
      const response = await customFetch(
        `/api/category/delete/${userData.user.id}`,
        { method: "POST", 
          headers: { "x-auth-token": userData.token},
        });
  
        console.log(response);
    }

  return (
    <>  
      <StyledCenter> 
        { !loading ?  <>
        {[...CATEGORIES, ...data].map(({name, _id}, key) => 
            <StyledGreenButton onClick={() => getCategoryItems(name)} key={key} id={_id}>{name}</StyledGreenButton>)}
            <StyledRedButton>Delete Category</StyledRedButton>
            </> : <StyledHeader>Loading Categories...</StyledHeader>
        }

        {categoryValue ? 
          categoryValue.length !== 0 ? 
          <StyledCardGrid>
              {
                categoryValue.map((props) => <Card key={props._id} {...props}/>)
              }
            </StyledCardGrid>
            : <StyledHeader>no items match these categories</StyledHeader> 
          : null
        }
      </StyledCenter>
    </>
  );
}
