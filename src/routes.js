import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import PlayerGames from "./pages/Dashboard/PlayerGames";
import GMGames from "./pages/Dashboard/GMGames";
import NewGame from "./pages/Dashboard/GMGames/NewGame";

//  CharCreation
import RaceSelection from "./pages/CharCreation/RaceSelection";
import OriginSelection from "./pages/CharCreation/OriginSelection";
import ClassSelection from "./pages/CharCreation/ClassSelection";
import Multiclass from "./pages/CharCreation/Multiclass";
import DisciplineSelection from "./pages/CharCreation/DisciplineSelection";
import DefensiveSpecialty from "./pages/CharCreation/DefensiveSpecialty";
import OfensiveSpecialty from "./pages/CharCreation/OfensiveSpecialty";
import PastDefinition from "./pages/CharCreation/PastDefinition";
import CharacteristicsDefinition from "./pages/CharCreation/CharacteristicsDefinition";
import AlignmentSelection from "./pages/CharCreation/AlignmentSelection";
import AtributesAllocation from "./pages/CharCreation/AtributesAllocation";
import EquipmentDefinition from "./pages/CharCreation/EquipmentDefinition";
import ProfileDefinition from "./pages/CharCreation/ProfileDefinition";

// GM
import GMPanel from "./pages/GMPanel";
import Management from "./pages/GMPanel/Management";
import NewPlayer from "./pages/GMPanel/Management/NewPlayer";

// Player
import PlayerPanel from "./pages/PlayerPanel";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard-player-list" exact component={PlayerGames} />
        <Route path="/dashboard-gm-list" exact component={GMGames} />
        <Route path="/dashboard-gm-list-new-game" exact component={NewGame} />

        {/* CharCreation */}
        <Route path="/char-creation-0" exact component={RaceSelection} />
        <Route path="/char-creation-1" exact component={OriginSelection} />
        <Route path="/char-creation-2" exact component={ClassSelection} />
        <Route path="/char-creation-3" exact component={Multiclass} />
        <Route path="/char-creation-4" exact component={DisciplineSelection} />
        <Route path="/char-creation-5" exact component={DefensiveSpecialty} />
        <Route path="/char-creation-6" exact component={OfensiveSpecialty} />
        <Route path="/char-creation-7" exact component={PastDefinition} />
        <Route path="/char-creation-8" exact component={CharacteristicsDefinition} />
        <Route path="/char-creation-9" exact component={AlignmentSelection} />
        <Route path="/char-creation-10" exact component={AtributesAllocation} />
        <Route path="/char-creation-11" exact component={EquipmentDefinition} />
        <Route path="/char-creation-12" exact component={ProfileDefinition} />

        {/* GM */}
        <Route path="/gm-panel" exact component={GMPanel} />
        <Route path="/gm-management" exact component={Management} />
        <Route path="/gm-new-player" exact component={NewPlayer} />

        {/* Player */}
        <Route path="/player-panel" exact component={PlayerPanel} />

        <Route>
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
