import React, { useEffect, useState } from "react";

function UseEffectComponent() {
  const [number, setNumber] = useState(0);
  console.count("component rendered");

  useEffect(() => {
    let mounted = true;

    fetch("url")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          //   set fetched data
          console.log("mounted");
        }
      });

    return () => {
      mounted = false;
      console.log("unmounted");
    };
  }, []);

  // will call cleanup function when component unmounts, or if dependencies change, before every re-render

  return (
    <div>
      <span>You clicked {number} times</span>
      <button onClick={() => setNumber((p) => p + 1)}>Increase</button>
    </div>
  );
}

export default UseEffectComponent;
