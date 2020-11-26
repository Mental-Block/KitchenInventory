import { useState, useEffect } from "react"

import customFetch from "root/function/customFetch";
import getToken from "root/function/getToken";

const useCheckLogin = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLogin = async () => {
      const token = getToken();

      const tokenIsValid = await customFetch("/api/users/tokenIsValid", {
        method: "POST",
        headers: { "x-auth-token": token },
      });

      if (!tokenIsValid) return;
      const user = await customFetch("/api/users/user", {
        method: "GET",
        headers: { "x-auth-token": token },
      });

      setUserData({ token: token, user: user });
      localStorage.setItem("auth-token", token);
    };

    checkLogin();
  }, []);

  return { userData, setUserData }
}

export default useCheckLogin;