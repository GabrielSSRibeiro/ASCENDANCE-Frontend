import React from "react";
import TextBox from "../TextBox";

function InitialScreen({ Functions, States }) {
  return (
    <>
      {States.initialScreen ? (
        <>
          <h1>ESSENCIA</h1>
          <TextBox />
          <div className="row">
            <div className="col-sm">
              <button className="std-button-filled" onClick={Functions.PlayerButtonClick}>
                Jogador
              </button>
            </div>

            <div className="w-100"></div>

            <div className="col-sm">
              <button className="std-button" onClick={Functions.GMButtonClick}>
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
