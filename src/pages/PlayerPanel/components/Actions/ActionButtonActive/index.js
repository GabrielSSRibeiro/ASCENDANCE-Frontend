import React from "react";

import "./styles.css";
import actionButton from "../../../../../assets/playerPanel/actionButton.png";
import d20 from "../../../../../assets/playerPanel/d20.png";

function ActionButtonActive() {
  return (
    <div className="ActionButtonActive-container">
      <img src={actionButton} alt="actionButton" />
      <img src={d20} alt="d20" />
    </div>
  );
}

export default ActionButtonActive;
