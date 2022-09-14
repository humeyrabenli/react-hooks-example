import React, { useState } from "react";

const Child = () => {
  console.log("child component render");
  return <div>child</div>;
};

const MemoExample = () => {
  const [count, setCount] = useState(0);

  console.log("component render");

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>sayacı artır</button>
      <Child />
    </div>
  );
};

export default MemoExample;
