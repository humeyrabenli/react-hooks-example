import React, { useRef, useState } from "react";

const RefExample2 = () => {
  const [test, setTest] = useState({});

  const value = useRef(0);

  console.log("value", value);

  const onIncrease = () => {
    setTest({});
    value.current += 1;
  };

  return (
    <div>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
};

export default RefExample2;
