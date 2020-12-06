import React, { useState, useContext, useReducer } from "react";

import Prompt from "root/components/Prompt";
import UserContext from "root/context/UserContext"

import * as Deletes from "./deleteTypes"

import { StyledDeleteButtonContainer, StyledRedButton, StyledGreenButton, StyledCenter } from "root/css"

import decodeHtml from "root/function/decodeHtml.js"


const ACTION = {
    SHOW_OPTION_1: "1",
    SHOW_OPTION_2: "2",
    SHOW_OPTION_3: "3",
    SHOW_NONE: "none"
}

const INITIAL_STATE = {
    option1: false,
    option2: false,
    option3: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.SHOW_OPTION_1: return { ...state, option1: true, };
        case ACTION.SHOW_OPTION_2: return { ...state, option2: true, };
        case ACTION.SHOW_OPTION_3: return { ...state, option3: true };
        case ACTION.SHOW_NONE: return { option1: false, option2: false, option3: false };
        default: return state;
    }
}

const BUTTONS = [
    { name: "Items &#10008;", type: ACTION.SHOW_OPTION_1 },
    { name: "Categories &#10008;", type: ACTION.SHOW_OPTION_2 },
    { name: "Units &#10008;", type: ACTION.SHOW_OPTION_3 }
];

export default function Delete({ ...props }) {
    if (!props.open) return null

    const { userData } = useContext(UserContext)

    const [{ option1, option2, option3 }, dispatch] = useReducer(reducer, INITIAL_STATE)
    const option4 = !option1 && !option2 && !option3 ? true : false
    const close = () => dispatch({ type: ACTION.SHOW_NONE })

    const [prompt, setPrompt] = useState({ open: false, id: null })

    return (
        <> {option4 ?
            <StyledCenter>
                <StyledDeleteButtonContainer>
                    {BUTTONS.map(({ name, type }, key) =>
                        <StyledRedButton key={key} onClick={() => dispatch({ type })}>{decodeHtml(name)}</StyledRedButton>)
                    }
                </StyledDeleteButtonContainer>
            </StyledCenter> : null
        }

            <StyledCenter>
                <Deletes.Item open={option1} close={close} />
                <Deletes.Categories open={option2} close={close} />
                <Deletes.Units open={option3} close={close} />
            </StyledCenter>
        </>
    );
}
