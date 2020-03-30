import React from "react";
import content from "../../../../utils/content";

import "./styles.css";

import management from "../../../../assets/GMMenu/management.png";
import encounter from "../../../../assets/GMMenu/encounter.png";
import rules from "../../../../assets/GMMenu/rules.png";
import tests from "../../../../assets/GMMenu/tests.png";
import tools from "../../../../assets/GMMenu/tools.png";

function Menu({ history }) {
  function ManagementCLick() {
    history.push("/gm-management");
  }
  function EncounterCLick() {}
  function RulesCLick() {}
  function TestsCLick() {}
  function ToolsCLick() {}

  return (
    <>
      <div className="row menu-bar align-items-center justify-content-between">
        <div className="col menu-box" onClick={ManagementCLick}>
          <img className="menu-img" src={management} alt="management" />
          <button className="menu-button">{content.GMPanel.button.management}</button>
        </div>
        <div className="col menu-box" onClick={EncounterCLick}>
          <img className="menu-img" src={encounter} alt="encounter" />
          <button className="menu-button">{content.GMPanel.button.encounter}</button>
        </div>
        <div className="col menu-box" onClick={RulesCLick}>
          <img className="menu-img" src={rules} alt="rules" />
          <button className="menu-button">{content.GMPanel.button.rules}</button>
        </div>
        <div className="col menu-box" onClick={TestsCLick}>
          <img className="menu-img" src={tests} alt="tests" />
          <button className="menu-button">{content.GMPanel.button.tests}</button>
        </div>
        <div className="col menu-box" onClick={ToolsCLick}>
          <img className="menu-img" src={tools} alt="tools" />
          <button className="menu-button">{content.GMPanel.button.tools}</button>
        </div>
      </div>
    </>
  );
}

export default Menu;
