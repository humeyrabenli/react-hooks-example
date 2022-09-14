import React, { useCallback, useEffect, useState } from "react";

export const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());

    console.log("rendering...");
  }, [getItems]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export const CallbackExample = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const getItems = useCallback(() => {
    return [number + 1, number + 2, number + 3];
  }, [number]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <List getItems={getItems} />
    </div>
  );
};

export default CallbackExample;
