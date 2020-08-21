import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import standard from "~/styles/themes/standard";
import Routes from "./routes";
import { connect, disconnect } from "../src/services/socket";
import { AuthProvider } from "./contexts/auth";
import { LanguageProvider } from "./contexts/language";

import "./styles/general.css";
import "./styles/buttons.css";

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
    <ThemeProvider theme={standard}>
      <LanguageProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
