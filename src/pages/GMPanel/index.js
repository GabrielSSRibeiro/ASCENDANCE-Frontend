import React, { useState, useEffect } from "react";
import content from "../../utils/content";
import NaviBar from "../../components/NaviBar";
import MembersBar from "../../components/MembersBar";

import "./styles.css";
import management from "../../assets/GMMenu/management.png";
import encounter from "../../assets/GMMenu/encounter.png";
import rules from "../../assets/GMMenu/rules.png";
import tests from "../../assets/GMMenu/tests.png";
import tools from "../../assets/GMMenu/tools.png";

function GMPanel({ history }) {
  function ManagementCLick() {
    history.push("/gm-management");
  }

  function EncounterCLick() {}
  function RulesCLick() {}
  function TestsCLick() {}
  function ToolsCLick() {}

  const tabs = [
    { name: content.GMPanel.button.management, img: management, onClick: ManagementCLick },
    { name: content.GMPanel.button.encounter, img: encounter, onClick: EncounterCLick },
    { name: content.GMPanel.button.rules, img: rules, onClick: RulesCLick },
    { name: content.GMPanel.button.tests, img: tests, onClick: TestsCLick },
    { name: content.GMPanel.button.tools, img: tools, onClick: ToolsCLick }
  ];
  return (
    <>
      <NaviBar history={history} />
      <div className="row GM-panel-bar align-items-center justify-content-between">
        {tabs.map(item => (
          <div className="col GM-panel-box" onClick={item.onClick}>
            <img className="GM-panel-img" src={item.img} alt="management" />
            <button className="GM-panel-button">{item.name}</button>
          </div>
        ))}
      </div>
      <MembersBar />
    </>
  );
}

export default GMPanel;
