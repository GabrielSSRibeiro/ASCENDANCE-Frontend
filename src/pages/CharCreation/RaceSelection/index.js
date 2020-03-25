import React from "react";
import NaviBar from "../../../components/NaviBar";
import ReturnMenu from "../../../components/ReturnMenu";
import BigTextBox from "../../../components/BigTextBox";

import "./styles.css";

function RaceSelection({ history }) {
  function ReturnPlayerList() {
    history.push("/dashboard-player-list");
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnPlayerList} title="Escolha a Raça" />
      <button className="big-round-button RaceSelection-btn">Humano</button>
      <button className="big-round-button RaceSelection-btn">Anão</button>
      <button className="big-round-button RaceSelection-btn">Elfo</button>
      <button className="big-round-button RaceSelection-btn">Halfling</button>
      <div className="w-100"></div>
      <button className="big-round-button RaceSelection-btn-hybrid">Mestiço</button>
      <div className="w-100"></div>
      <button className="std-button RaceSelection-btn-next">Próximo</button>
      <BigTextBox />
    </>
  );
}

export default RaceSelection;
