const getToken = () => {
  let token = localStorage.getItem("auth-token");
  if (token === null) {
    localStorage.setItem("auth-token", "");
    return (token = "");
  }
  return token;
};

export default getToken;
