import React from "react";

import "./styles.css";
import returnArrow from "../../assets/arrows/returnArrow.png";

function ReturnMenu({ returnFunction, title }) {
  return (
    <div className="row returnMenu-bar align-items-center justify-content-center">
      <div className="col-1 returnMenu-box" onClick={returnFunction}>
        <img className="returnMenu-img" src={returnArrow} alt="Return" />
        <button className="returnMenu-button ">
          <strong>Voltar</strong>
        </button>
      </div>
      <div className="col-sl-auto">
        <p className="returnMenu-title">{title}</p>
      </div>
    </div>
  );
}

export default ReturnMenu;
