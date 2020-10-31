const onSubmit = async (data, event) => {
  event.preventDefault();

  const response = await submitFetch("/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.status === 200) logIn(setUserData, history, response.data);
  else setNewError(setError, response.data);
};
