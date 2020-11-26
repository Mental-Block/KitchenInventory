import React, { useState, useReducer } from "react";

import * as Item from "root/components/item"

import { StyledHeader, StyledItemGrid, StyledCenter } from "root/css";

import useFetch from "root/use/useFetch"

import decodeHtml from "root/function/decodeHtml.js"

import { StyledGreenButton, StyledRedButton } from "root/css";

import styled from "styled-components"

import { StyledPageWrapper } from "../../../css/wrapper";

const ButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width : 320px;
  display: flex;
  justify-content: ${(props) => !props.state ? "flex-end" : "space-between"} ;
  align-items: center;
`;

const ACTION = {
  0: "add",
  1: "delete",
  2: "edit",
  TOGGLE: "toggle"
}

const INITIALSTATE = {
  add: false,
  del: false,
  edit: false,
  toggle: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION[0]: return { ...state, add: true, toggle: false };
    case ACTION[1]: return { ...state, del: true, toggle: false };
    case ACTION[2]: return { ...state, edit: true, toggle: false };
    case ACTION.TOGGLE: return { add: false, del: false, edit: false, toggle: !state.toggle };
    default: return state;
  }
}

const BUTTONS = [{ name: "Add &#10004;" }, { name: "Delete &#10008;" }, { name: "Edit &#9998;" }];

export default function Dashboard({ userData }) {
  const [{ toggle, add, del }, dispatch] = useReducer(reducer, INITIALSTATE)
  const close = () => dispatch({ type: ACTION.TOGGLE })

  return (
    <>
      <ButtonContainer state={toggle}>
        {toggle ? BUTTONS.map(({ name }, key) =>
          <StyledGreenButton key={key} onClick={() => dispatch({ type: ACTION[key] })}>{decodeHtml(name)}</StyledGreenButton>)
          : <StyledRedButton onClick={close}>Back &#8617;</StyledRedButton>
        }
      </ButtonContainer>

      <Item.View open={toggle} token={userData.token} />
      <Item.Delete open={del} close={close} />
      <Item.Add open={add} close={close} token={userData.token} />




    </>
  );
}

