import React from "react";
import content from "../../utils/content";
import NaviBar from "../../components/NaviBar";
import TextBox from "./components/TextBox";

import "./styles.css";

function Dashboard({ history }) {
  function PlayerButtonClick() {
    history.push("/dashboard-player-list");
  }

  function GMButtonClick() {
    history.push("/dashboard-gm-list");
  }
  return (
    <>
      <NaviBar history={history} />
      <h1 className="game-title">{content.dashboard.title}</h1>
      <TextBox content={content.dashboard.textBox} />
      <div className="row">
        <div className="col-sm">
          <button className="dashboard-button std-button-filled" onClick={PlayerButtonClick}>
            {content.dashboard.button.player}
          </button>
        </div>

        <div className="w-100"></div>

        <div className="col-sm">
          <button className="dashboard-button std-button" onClick={GMButtonClick}>
            {content.dashboard.button.GM}
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
