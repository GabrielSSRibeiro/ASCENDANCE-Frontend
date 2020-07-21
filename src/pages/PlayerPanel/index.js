import React from "react";
import NaviBar from "../../components/NaviBar";
import MembersBar from "../../components/MembersBar";
import PlayerMenu from "./components/PlayerMenu";

import { useLanguage } from "../../contexts/language";
import "./styles.css";

function PlayerPanel({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);

  return (
    <div className="PlayerPanel-container">
      <NaviBar history={history} />
      <PlayerMenu content={content} history={history} />
      <main>
        <section></section>
        <footer>
          <MembersBar history={history} />
        </footer>
      </main>
    </div>
  );
}

export default PlayerPanel;
