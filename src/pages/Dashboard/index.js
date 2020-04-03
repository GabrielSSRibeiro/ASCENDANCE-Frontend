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
    <div className="dashboard-container">
      <NaviBar history={history} />
      <h1 className="game-title">{content.dashboard.title}</h1>

      <main>
        <TextBox content={content.dashboard.textBox} />
        <section>
          <button className="std-button-filled" onClick={PlayerButtonClick}>
            {content.dashboard.button.player}
          </button>

          <button className="std-button" onClick={GMButtonClick}>
            {content.dashboard.button.GM}
          </button>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
