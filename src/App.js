import React, { useEffect } from "react";
import Routes from "./routes";
import { connect, disconnect } from "../src/services/socket";

import "./styles/App.css";

function App() {
  useEffect(() => {
    function SetupWebsocket() {
      const user = localStorage.getItem("user");
      disconnect();

      connect(user);
    }

    SetupWebsocket();
  }, []);

  return <Routes />;
}

export default App;
