import React, { useState, useEffect } from "react";
import NaviBar from "../../NaviBar";

import "./styles.css";

import management from "../../../assets/GMMenu/management.png";
import encounter from "../../../assets/GMMenu/encounter.png";
import rules from "../../../assets/GMMenu/rules.png";
import tests from "../../../assets/GMMenu/tests.png";
import tools from "../../../assets/GMMenu/tools.png";

function Menu({ history }) {
  const states = { history };

  function ManagementCLick() {
    history.push("/management");
  }
  function EncounterCLick() {}
  function RulesCLick() {}
  function TestsCLick() {}
  function ToolsCLick() {}

  return (
    <>
      <NaviBar {...states} />
      <div className="row menu-bar align-items-center justify-content-between">
        <div className="col box-menu" onClick={ManagementCLick}>
          <img className="menu-img" src={management} alt="management" />
          <button className="menu-button">Gerenciamento</button>
        </div>
        <div className="col box-menu" onClick={EncounterCLick}>
          <img className="menu-img" src={encounter} alt="encounter" />
          <button className="menu-button">Encontro</button>
        </div>
        <div className="col box-menu" onClick={RulesCLick}>
          <img className="menu-img" src={rules} alt="rules" />
          <button className="menu-button">Regras Mestre</button>
        </div>
        <div className="col box-menu" onClick={TestsCLick}>
          <img className="menu-img" src={tests} alt="tests" />
          <button className="menu-button">Testes</button>
        </div>
        <div className="col box-menu" onClick={ToolsCLick}>
          <img className="menu-img" src={tools} alt="tools" />
          <button className="menu-button">Ferramentas</button>
        </div>
      </div>
    </>
  );
}

export default Menu;
