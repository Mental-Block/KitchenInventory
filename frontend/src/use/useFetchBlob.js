import { useState, useEffect } from "react";

const useFetchBlob = (url, options, reload) => {
  const [data, setData] = useState({ src: null, loading: true });
  useEffect(() => {
    setData((data) => ({ src: data, loading: true }));
    fetch(url, options)
      .then((res) => res.blob())
      .then((blob) => setData({ src: URL.createObjectURL(blob), loading: false }))
      .catch((error) => console.log(error));
  }, [reload]);

  return data;
}

export default useFetchBlob;
