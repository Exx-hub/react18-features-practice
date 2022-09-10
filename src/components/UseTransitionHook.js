import React, { useState, useTransition } from "react";

function UseTransitionHook() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const [isPending, startTranstion] = useTransition();

  const LIST_SIZE = 20000;

  const handleChange = (e) => {
    setInput(e.target.value);

    // sets to low prio because it is slow and it slows down input display
    startTranstion(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading"
        : list.map((item, i) => {
            return <span key={i}>{item}</span>;
          })}
    </div>
  );
}

export default UseTransitionHook;
