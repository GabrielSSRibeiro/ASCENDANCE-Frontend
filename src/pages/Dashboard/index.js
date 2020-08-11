import React, { useEffect } from "react";
import NaviBar from "~/components/molecules/NaviBar";

import TextBox from "./components/TextBox";

import "./styles.css";
import { useLanguage } from "~/contexts/language";

function Dashboard({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);

  useEffect(() => {
    localStorage.removeItem("game");
    localStorage.removeItem("GM");
  }, []);

  function PlayerButtonClick() {
    history.push("/dashboard-player-list");
  }

  function GMButtonClick() {
    history.push("/dashboard-gm-list");
  }

  return (
    <div className="dashboard-container">
      <NaviBar history={history} />
      <h1 className="game-title">{content.title}</h1>

      <main>
        <TextBox content={content.textBox} />
        <section>
          <button className="std-button-filled" onClick={PlayerButtonClick}>
            {content.button.player}
          </button>

          <button className="std-button" onClick={GMButtonClick}>
            {content.button.GM}
          </button>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
