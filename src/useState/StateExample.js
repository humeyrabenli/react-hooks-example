import React, { useState } from "react";

const StateExample = () => {
  const [input, setInput] = useState("Test");

  const onChange = (event) => {
    const newValue = event.target.value;
    setInput(newValue);
  };
  return (
    <div>
      <input placeholder="bir şeyler yaz..." onChange={onChange} />
      <p>{input}</p>
    </div>
  );
};

export default StateExample;
