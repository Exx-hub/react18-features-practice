import { useEffect, useState } from "react";

const useFetch = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    fetch(options.url)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) {
          setData(data);
        }
      });

    return () => {
      // clean up
      isCancelled = true;
    };
  }, [options.url]);

  // if dependency value changes or component gets mounted, clean up function is called
  // this example will cancel current fetch if it hasnt already completed

  return {
    data,
  };
};

export default useFetch;
