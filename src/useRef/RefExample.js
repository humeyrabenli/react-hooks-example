import React, { useRef } from "react";

const RefExample = () => {
  const inputRef = useRef();
  const divRef = useRef();

  const onFocusButton = () => {
    inputRef.current.focus();
  };

  const onDivBorder = () => {
    divRef.current.style.border = "1px solid black";
  };

  return (
    <div ref={divRef}>
      <input ref={inputRef} placeholder="input" />
      <button onClick={onFocusButton}>focus</button>
      <button onClick={onDivBorder}>Div border değiştir</button>
    </div>
  );
};

export default RefExample;
