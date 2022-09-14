import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const { userName } = useContext(UserContext);
  return (
    <div>
      <h1>User : {userName}</h1>
    </div>
  );
};

export default User;
