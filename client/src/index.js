import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NumberProvider } from "./Context/number";
import { UserProvider } from "./Context/UserEmail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NumberProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </NumberProvider>
  </React.StrictMode>
);
