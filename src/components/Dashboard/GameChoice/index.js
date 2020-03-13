import React from "react";

import "./styles.css";

function GameChoice(props) {
  function PlayerButtonClick() {
    props.history.push("/dashboard-player-list");
  }

  function GMButtonClick() {
    props.history.push("/dashboard-gm-list");
  }

  return (
    <>
      <div className="row">
        <div className="col-sm">
          <button className="dashboard-button std-button-filled" onClick={PlayerButtonClick}>
            Jogador
          </button>
        </div>

        <div className="w-100"></div>

        <div className="col-sm">
          <button className="dashboard-button std-button" onClick={GMButtonClick}>
            Mestre
          </button>
        </div>
      </div>
    </>
  );
}

export default GameChoice;
