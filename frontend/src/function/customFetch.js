const customFetch = async (url, options) => {
  return await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export default customFetch;
