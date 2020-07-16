import React from "react";
import { Route } from "react-router-dom";

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

export default function CharCreation() {
  return (
    <>
      <Route path="/char-creation-0" exact component={RaceSelection} />
      <Route path="/char-creation-1" exact component={OriginSelection} />
      <Route path="/char-creation-2" exact component={ClassSelection} />
      <Route path="/char-creation-3" exact component={DisciplineSelection} />
      <Route path="/char-creation-4" exact component={DefensiveSpecialty} />
      <Route path="/char-creation-5" exact component={OfensiveSpecialty} />
      <Route path="/char-creation-6" exact component={PastDefinition} />
      <Route path="/char-creation-7" exact component={CharacteristicsDefinition} />
      <Route path="/char-creation-8" exact component={AlignmentSelection} />
      <Route path="/char-creation-9" exact component={AtributesAllocation} />
      <Route path="/char-creation-10" exact component={ProfileDefinition} />
    </>
  );
}
