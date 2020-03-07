import React from "react";

import "./styles.css";

function ReturnMenu({ Functions, Title }) {
  return (
    <div className="row return-bar align-items-center justify-content-center">
      <div className="col-1 box-return" onClick={Functions}>
        <img className="return-img" src="" alt="Back" />
        <button className="return-button">
          <strong>Voltar</strong>
        </button>
      </div>
      <div className="col-sl-auto box-title">
        <p className="return-title">{Title}</p>
      </div>
    </div>
  );
}

export default ReturnMenu;
