import React, { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";

const useStopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return count;
};

function UseEffectJack() {
  const [url, setUrl] = useState("/sally.json");
  const { data } = useFetch({ url });
  const count = useStopWatch();
  console.log("component rendering");
  return (
    <div>
      <div>Count: {count}</div>
      <div>{JSON.stringify(data)}</div>
      <button onClick={() => setUrl("/jack.json")}>JACK</button>
      <button onClick={() => setUrl("/sally.json")}>SALLY</button>
    </div>
  );
}

export default UseEffectJack;
