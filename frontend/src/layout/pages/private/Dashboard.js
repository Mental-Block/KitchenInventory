import React, { useReducer, useContext } from "react";

import * as Item from "root/components/item"

import decodeHtml from "root/function/decodeHtml.js"

import { StyledGreenButton, StyledRedButton, StyledDesktopButtonContainer } from "root/css";

const ACTION = {
  SHOW_OPTION_1: "1",
  SHOW_OPTION_2: "2",
  SHOW_NONE: "none"
}

const INITIAL_STATE = {
  option1: false,
  option2: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SHOW_OPTION_1: return { ...state, option1: true };
    case ACTION.SHOW_OPTION_2: return { ...state, option2: true };
    case ACTION.SHOW_NONE: return { option2: false, option1: false };
    default: return state;
  }
}

const BUTTONS = [{ name: "Add &#10004;", type: ACTION.SHOW_OPTION_1 }, { name: "Delete &#10008;", type: ACTION.SHOW_OPTION_2 }];

export default function Dashboard() {
  const [{ option1, option2 }, dispatch] = useReducer(reducer, INITIAL_STATE)
  const option3 = !option1 && !option2 ? true : false
  const close = () => dispatch({ type: ACTION.SHOW_NONE })

  return (
    <>
      <StyledDesktopButtonContainer state={option3}>
        {option3 ? BUTTONS.map(({ name, type }, key) =>
          <StyledGreenButton key={key} onClick={() => dispatch({ type })}>{decodeHtml(name)}</StyledGreenButton>)
          : <StyledRedButton onClick={close}>Back &#8617;</StyledRedButton>
        }
      </StyledDesktopButtonContainer>

      <Item.Add open={option1} close={close} />
      <Item.Delete open={option2} close={close} />
      <Item.View open={option3} />
    </>
  );
}

