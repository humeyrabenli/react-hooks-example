import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Login = () => {
  const { setUserName } = useContext(UserContext);
  return (
    <div>
      <input onChange={(event) => setUserName(event.target.value)}></input>
    </div>
  );
};

export default Login;
