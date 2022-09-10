import React, { useState, useTransition } from "react";

function CounterTransition() {
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);

  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => setShowCounter((prev) => !prev)); // sets this to low prio
    // setShowCounter((prev) => !prev);
    setCount((prev) => prev + 1); // set to urgent

    // by doing this, you can somehow see the count update before hiding.
    // unlike with no transition, you will not catch any glimpse of count updating
  };
  return (
    <div>
      <button onClick={onClick}>Click me</button>
      {showCounter && <div>{count}</div>}
    </div>
  );
}

export default CounterTransition;
