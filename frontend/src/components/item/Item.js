import React from "react";

import useFetchBlob from "root/use/useFetchBlob"

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
  props.imageUrl = `/api/${props.imageUrl}`;
  const { src, loading } = useFetchBlob(props.imageUrl, null, props.imageUrl);

  return (
    <>
      <StyledItem>
        <StyledHeader>{props.title}</StyledHeader>
        {loading ? <StyledParagraph>Loading image...</StyledParagraph> : <StyledItemImg src={src} />}
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
