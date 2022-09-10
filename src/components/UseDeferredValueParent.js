import React, { useState } from "react";
import UseDeferredValue from "./UseDeferredValue";

function UseDeferredValueParent() {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <UseDeferredValue input={input} />
    </div>
  );
}

export default UseDeferredValueParent;
