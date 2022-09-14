import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const users = [
    { id: "1", name: "A user" },
    { id: "2", name: "B user" },
  ];

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const List = ({ list }) => {
    return (
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
  };

  const ListItem = ({ item }) => {
    return <li>{item.name}</li>;
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log("filter render");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

export default UseMemoExample;
