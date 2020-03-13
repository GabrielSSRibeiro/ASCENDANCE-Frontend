import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import PlayerGames from "./pages/Dashboard/PlayerGames";
import GMGames from "./pages/Dashboard/GMGames";
import NewGame from "./pages/Dashboard/GMGames/NewGame";

import GMPanel from "./pages/GM/GMPanel";
import Management from "./pages/GM/Management";
import AddPlayer from "./pages/GM/Management/AddPlayer";

import PlayerPanel from "./pages/Player/PlayerPanel";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard-player-list" exact component={PlayerGames} />
        <Route path="/dashboard-gm-list" exact component={GMGames} />
        <Route path="/dashboard-gm-list-new-game" exact component={NewGame} />

        {/* GM */}
        <Route path="/gm-panel" exact component={GMPanel} />
        <Route path="/gm-management" exact component={Management} />
        <Route path="/gm-add-player" exact component={AddPlayer} />

        {/* Player */}
        <Route path="/player-panel" exact component={PlayerPanel} />

        <Route>
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
