import { useState, useEffect } from "react";

const useFetch = (url, options, reload) => {
  const [dataValue, setData] = useState({ data: null, loading: true });

  useEffect(() => {
    setData((dataValue) => ({ ...dataValue }));
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setData({ data: res, loading: false }))
      .catch((error) => console.log(error));
  }, [reload]);

  return dataValue;
};

export default useFetch;
