import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GMPanel from "./pages/GM/GMPanel";
import Management from "./pages/GM/Management";
import PlayerPanel from "./pages/Player/PlayerPanel";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />

        {/* GM */}
        <Route path="/gm-panel" exact component={GMPanel} />
        <Route path="/management" exact component={Management} />

        {/* Player */}
        <Route path="/player-panel" exact component={PlayerPanel} />

        <Route>
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
