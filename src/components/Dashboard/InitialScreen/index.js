import React from "react";
import TextBox from "../TextBox";

function InitialScreen(props) {
  function PlayerButtonClick() {
    props.setPlayerGamesDisplay(!props.playerGamesDisplay);
    props.setInitialScreenDisplay(!props.initialScreenDisplay);
  }

  function GMButtonClick() {
    props.setGMGamesDisplay(!props.GMGamesDisplay);
    props.setInitialScreenDisplay(!props.initialScreenDisplay);
  }

  return (
    <>
      {props.initialScreenDisplay ? (
        <>
          <h1 className="game-title">ESSENCIA</h1>
          <TextBox />
          <div className="row">
            <div className="col-sm">
              <button className="std-button-filled" onClick={PlayerButtonClick}>
                Jogador
              </button>
            </div>

            <div className="w-100"></div>

            <div className="col-sm">
              <button className="std-button" onClick={GMButtonClick}>
                Mestre
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default InitialScreen;
