import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action === "increment") {
    return state + 1;
  } else if ((action = "decrement")) {
    return state - 1;
  } else if (action === "reset") {
    return 0;
  } else {
    throw new Error();
  }
};

console.log("render");

const ReducerExample = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  console.log("component render");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default ReducerExample;
