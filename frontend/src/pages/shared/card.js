import React from "react"

import useFetchImage from "root/use/useFetchImage"

import {
    StyledParagraph, 
    StyledCard, 
    StyledRedLink, 
    StyledGreenLink, 
    StyledSpaceBetween,
  } from "root/css";

export default function Card({title, imageUrl, quantity, unitName, categoryName}){
    const {image, loading} = useFetchImage(imageUrl, null, imageUrl)
  
    return(
      <StyledCard>
        <StyledParagraph>{title}</StyledParagraph>
        {loading ? <StyledParagraph>Loading image...</StyledParagraph> : <img src={image}/>}
        <StyledParagraph>Quantity: {quantity} {unitName}</StyledParagraph>
        <StyledParagraph>Category: {categoryName}</StyledParagraph>
        <StyledSpaceBetween>
          <StyledGreenLink>Edit</StyledGreenLink> 
          <StyledRedLink>Delete</StyledRedLink>
        </StyledSpaceBetween>
      </StyledCard>
    )
  }