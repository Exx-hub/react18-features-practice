import React, { Suspense } from "react";
import Coins from "./Coins";

function SuspenseComponent() {
  return (
    <div>
      <Suspense fallback={<h1>Loading..</h1>}>
        <h1>Coins List</h1>
        <Coins />
      </Suspense>
    </div>
  );
}

export default SuspenseComponent;
