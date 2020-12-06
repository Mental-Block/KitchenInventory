import React from "react";

import {
  StyledParagraph,
  StyledItem,
  StyledRedButton,
  StyledGreenButton,
  StyledSpaceBetween,
  StyledItemImg,
  StyledHeader
} from "root/css";


export default function Item({ ...props }) {
  return (
    <>
      <StyledItem>
        <StyledHeader>{props.title}</StyledHeader>
        <StyledItemImg src={`/api/${props.imageUrl}`} />
        <StyledParagraph>Expires: {props.expiration.substring(0, 10)}</StyledParagraph>
        <StyledParagraph>Quantity: {props.quantity} {props.unitName}</StyledParagraph>
        <StyledParagraph>Category: {props.categoryName}</StyledParagraph>
        <StyledSpaceBetween>
          <StyledGreenButton sm onClick={props.edit}> Edit</StyledGreenButton>
          <StyledRedButton sm onClick={props.del}>Delete</StyledRedButton>
        </StyledSpaceBetween>
      </StyledItem>
    </>
  )
}
