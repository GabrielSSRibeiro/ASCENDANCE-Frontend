import React from "react";

import "./styles.css";
import actionButtonActive from "../../../../../assets/playerPanel/actionButtonActive.png";
import d20 from "../../../../../assets/playerPanel/d20.png";

function ActionButtonActive() {
  return (
    <div className="ActionButtonActive-container">
      <img src={actionButtonActive} alt="actionButton" />
      <img src={d20} alt="d20" />
    </div>
  );
}

export default ActionButtonActive;
