import { useState, useEffect } from "react";

const useFetchImage = (url, options, reload) => {
    const [data, setData] = useState({ image: null, loading: true });
      useEffect(() => {
        setData((data) => ({ image: data, loading: true }));
        fetch(`/api/${url}`, options)
          .then((res) => res.blob())
          .then((blob) => setData({ image: URL.createObjectURL(blob), loading: false }))
          .catch((error) => console.log(error));
      }, [reload]);
  
    return data;
  }

export default useFetchImage;
