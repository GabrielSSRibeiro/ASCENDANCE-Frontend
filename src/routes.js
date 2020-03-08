import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GMPanel from "./pages/GMPanel";
import PlayerPanel from "./pages/PlayerPanel";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/gm-panel" exact component={GMPanel} />
        <Route path="/player-panel" exact component={PlayerPanel} />
      </Switch>
    </BrowserRouter>
  );
}
