import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {  UserProvider } from "./useContext/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);

