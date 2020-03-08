import React from "react";
import TextBox from "../TextBox";

function InitialScreen({ PlayerButtonClick, GMButtonClick, initialScreen }) {
  return (
    <>
      {initialScreen ? (
        <>
          <h1>ESSENCIA</h1>
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
