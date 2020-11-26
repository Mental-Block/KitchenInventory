import React, { useState, useContext } from "react";

import Prompt from "root/components/Prompt";
import UserContext from "root/context/UserContext"

import { StyledGreenButton, StyledRedButton, StyledCenter } from "root/css"

export default function Delete({ ...props }) {
  if (!props.open) return null
  const { userData } = useContext(UserContext)
  const [prompt, setPrompt] = useState({ open: false, id: null })

  // category 
  // unit
  // item 

  return (
    <>
      <StyledCenter>
        <StyledRedButton>Delete Category</StyledRedButton>
        <StyledRedButton>Delete Category</StyledRedButton>
        <StyledRedButton>Delete Category</StyledRedButton>
      </StyledCenter>


      <Prompt
        open={prompt.open}
        close={() => setPrompt({ ...prompt, open: false })}
        reload={() => setPrompt({ ...prompt, reload: true })}
        message="Are you sure you want to delete this Item?"
        btnText={{ success: "YES", failed: "NO" }}
        fetch={{
          url: `/api/items/delete/${props.id}`,
          options: { method: "DELETE", headers: { "x-auth-token": userData.token } }
        }}
      />
    </>
  );
}
