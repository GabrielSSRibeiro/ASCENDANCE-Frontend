import React, { useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import api from "../services/api";
import PrivateRoute from "./privateRoutes";

import Login from "../pages/Login";

import Dashboard from "../pages/Dashboard";
import PlayerGames from "../pages/Dashboard/PlayerGames";
import GMGames from "../pages/Dashboard/GMGames";
import NewGame from "../pages/Dashboard/GMGames/NewGame";

//  CharCreation
import RaceSelection from "../pages/CharCreation/RaceSelection";
import OriginSelection from "../pages/CharCreation/OriginSelection";
import ClassSelection from "../pages/CharCreation/ClassSelection";
import DisciplineSelection from "../pages/CharCreation/DisciplineSelection";
import DefensiveSpecialty from "../pages/CharCreation/DefensiveSpecialty";
import OfensiveSpecialty from "../pages/CharCreation/OfensiveSpecialty";
import PastDefinition from "../pages/CharCreation/PastDefinition";
import CharacteristicsDefinition from "../pages/CharCreation/CharacteristicsDefinition";
import AlignmentSelection from "../pages/CharCreation/AlignmentSelection";
import AtributesAllocation from "../pages/CharCreation/AtributesAllocation";
import ProfileDefinition from "../pages/CharCreation/ProfileDefinition";

// GM
import GMPanel from "../pages/GMPanel";
import Management from "../pages/GMPanel/Management";
import NewPlayer from "../pages/GMPanel/Management/NewPlayer";

// Player
import PlayerPanel from "../pages/PlayerPanel";

export default function Routes() {
  const { signed } = useAuth();

  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${localStorage.getItem("ESSENCIA:token")}`;
  }, [signed]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />

        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/dashboard-player-list" exact component={PlayerGames} />
        <PrivateRoute path="/dashboard-gm-list" exact component={GMGames} />
        <PrivateRoute path="/dashboard-gm-list-new-game" exact component={NewGame} />

        {/* CharCreation */}
        <PrivateRoute path="/char-creation-0" exact component={RaceSelection} />
        <PrivateRoute path="/char-creation-1" exact component={OriginSelection} />
        <PrivateRoute path="/char-creation-2" exact component={ClassSelection} />
        <PrivateRoute path="/char-creation-3" exact component={DisciplineSelection} />
        <PrivateRoute path="/char-creation-4" exact component={DefensiveSpecialty} />
        <PrivateRoute path="/char-creation-5" exact component={OfensiveSpecialty} />
        <PrivateRoute path="/char-creation-6" exact component={PastDefinition} />
        <PrivateRoute path="/char-creation-7" exact component={CharacteristicsDefinition} />
        <PrivateRoute path="/char-creation-8" exact component={AlignmentSelection} />
        <PrivateRoute path="/char-creation-9" exact component={AtributesAllocation} />
        <PrivateRoute path="/char-creation-10" exact component={ProfileDefinition} />

        {/* GM */}
        <PrivateRoute path="/gm-panel" exact component={GMPanel} />
        <PrivateRoute path="/gm-management" exact component={Management} />
        <PrivateRoute path="/gm-new-player" exact component={NewPlayer} />

        {/* Player */}
        <PrivateRoute path="/player-panel" exact component={PlayerPanel} />

        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}
