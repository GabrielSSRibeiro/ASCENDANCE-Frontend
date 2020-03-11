import React from "react";

import "./styles.css";
import returnArrow from "../../assets/arrows/returnArrow.png";

function ReturnMenu({ returnFunction, title }) {
  return (
    <div className="row return-bar align-items-center justify-content-center">
      <div className="col-1 box-return" onClick={returnFunction}>
        <img className="return-img" src={returnArrow} alt="Return" />
        <button className="return-button ">
          <strong>Voltar</strong>
        </button>
      </div>
      <div className="col-sl-auto">
        <p className="return-title">{title}</p>
      </div>
    </div>
  );
}

export default ReturnMenu;
