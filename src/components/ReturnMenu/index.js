import React from "react";

import { useLanguage } from "../../contexts/language";
import "./styles.css";
import returnArrow from "../../assets/arrows/returnArrow.png";

function ReturnMenu({ returnFunction, title }) {
  const { content } = require(`./content/${useLanguage().language}`);

  return (
    <div className="returnMenu-container">
      <div onClick={returnFunction}>
        <img src={returnArrow} alt="Return" />
        <button>
          <strong>{content}</strong>
        </button>
      </div>
      <p>{title}</p>
    </div>
  );
}

export default ReturnMenu;
