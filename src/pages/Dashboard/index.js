import React from "react";
import content from "../../utils/content";
import GameChoice from "./components/GameChoice";
import NaviBar from "../../components/NaviBar";
import TextBox from "./components/TextBox";

import "./styles.css";

function Dashboard({ history }) {
  return (
    <>
      <NaviBar history={history} />
      <h1 className="game-title">{content.dashboard.title}</h1>
      <TextBox />
      <GameChoice history={history} />
    </>
  );
}

export default Dashboard;
