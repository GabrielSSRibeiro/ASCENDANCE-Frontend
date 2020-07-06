import React from "react";
import { returnMenu } from "../../utils/content";

import "./styles.css";
import returnArrow from "../../assets/arrows/returnArrow.png";

function ReturnMenu({ returnFunction, title }) {
  return (
    <div className="returnMenu-container">
      <div onClick={returnFunction}>
        <img src={returnArrow} alt="Return" />
        <button>
          <strong>{returnMenu}</strong>
        </button>
      </div>
      <p>{title}</p>
    </div>
  );
}

export default ReturnMenu;
