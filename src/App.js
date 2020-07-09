import React, { useEffect } from "react";
import Routes from "./routes";
import { connect, disconnect } from "../src/services/socket";
import { AuthProvider } from "./contexts/auth";
import { LanguageProvider } from "./contexts/language";

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

  return (
    <LanguageProvider>
      <AuthProvider>
        <Routes />;
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
//
