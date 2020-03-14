import React from "react";
import GameChoice from "./components/GameChoice";
import NaviBar from "../../components/NaviBar";
import TextBox from "./components/TextBox";

import "./styles.css";

function Dashboard({ history }) {
  return (
    <>
      <NaviBar history={history} />
      <h1 className="game-title">ESSENCIA</h1>
      <TextBox />
      <GameChoice history={history} />
    </>
  );
}

export default Dashboard;
