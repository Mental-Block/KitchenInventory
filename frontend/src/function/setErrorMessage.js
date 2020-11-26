const setErrorMessage = (setErrorHook, { name, message }) => {
  Array.isArray(name)
    ? name.map((name) => {
      setErrorHook(name, {
          type: "manual",
          message: message,
        });
      })
    : setErrorHook(name, {
        type: "manual",
        message: message,
      });
};

export default setErrorMessage;
