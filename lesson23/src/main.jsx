import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./Context/user/user.jsx";
import { HrProvider } from "./Context/hr/indexhr.jsx";
import Takrorolash from "./Components/Takrorolash.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <HrProvider>
        {/* <App /> */}
        <Takrorolash />
      </HrProvider>
    </UserProvider>
  </React.StrictMode>
);
