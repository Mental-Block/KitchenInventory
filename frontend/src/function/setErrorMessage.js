const setErrorMessage = (setError, { name, message }) => {
  Array.isArray(name)
    ? name.map((name) => {
        setError(name, {
          type: "manual",
          message: message,
        });
      })
    : setError(name, {
        type: "manual",
        message: message,
      });
};

export default setErrorMessage;
