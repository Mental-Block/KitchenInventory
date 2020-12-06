import React, { useState, useContext } from "react";
import { useHistory } from "react-router"

import UserContext from "root/context/UserContext";

import { StyledRedButton, StyledCenter, StyledGreenButton, StyledButtonContainer } from "root/css"

import Prompt from "root/components/Prompt";
import customFetch from "root/function/customFetch";

export default function Settings() {
  const [name, setName] = useState(false)
  const [del, setDelete] = useState(false);
  const history = useHistory();
  const { setUserData, userData } = useContext(UserContext);

  const logout = () => {
    setUserData({
      token: null,
      user: null,
    });
    localStorage.setItem("auth-token", "");
    history.push("/")
  }

  const getUpdateName = async () => {
    const user = await customFetch("/api/users/user", {
      method: "GET",
      headers: { "x-auth-token": userData.token },
    });

    setUserData({ token: userData.token, user: user });
  }


  return (
    <>
      <StyledCenter>
        <StyledButtonContainer>
          <StyledGreenButton onClick={() => setName(true)}>Changed Display Name</StyledGreenButton>
          <StyledRedButton onClick={() => setDelete(true)}>Delete Account</StyledRedButton>
        </StyledButtonContainer>
      </StyledCenter>


      <Prompt
        open={name}
        close={() => setName(false)}
        reload={getUpdateName}
        message="What would you like us to call you?"
        btnText={{
          success: "Change Name",
          failed: "Never mind"
        }}
        fetch={{
          url: "/api/users/name",
          options: { method: "PATCH", headers: { "content-type": "application/json", "x-auth-token": userData.token } }
        }}
        input={{
          name: "changeName",
          label: "Name",
          placeholder: "Bob",
          type: "text",
          rules: {
            required: {
              value: true,
              message: "This is field is required",
            },
            maxLength: {
              value: 15,
              message: "This input exceed maxLength of 15",
            },
            pattern: {
              value: /^[A-Z a-z]+$/,
              message: "Characters only please",
            },
          }
        }}
      />

      <Prompt
        open={del}
        close={() => setDelete(false)}
        reload={logout}
        message="Are you sure you want to delete your account? This action CAN NOT be undone."
        btnText={{
          success: "DELETE",
          failed: "NO"
        }}
        fetch={{
          url: "/api/users/delete",
          options: { method: "DELETE", headers: { "x-auth-token": userData.token } }
        }}
      />
    </>
  );
}
