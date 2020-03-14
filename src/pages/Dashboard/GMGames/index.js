import React from "react";
import NaviBar from "../../../components/NaviBar";
import ReturnMenu from "../../../components/ReturnMenu";
import GamesList from "./components/GamesList";

import "./styles.css";

function GMGames({ history }) {
  function ReturnDashboard() {
    history.push("/dashboard");
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnDashboard} title="Selecione o Jogo" />
      <GamesList history={history} />
    </>
  );
}

export default GMGames;
