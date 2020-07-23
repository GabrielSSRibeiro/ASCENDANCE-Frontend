import React from "react";

import "./styles.css";
import statusArrow from "../../../../assets/playerPanel/statusArrow.png";

function Status() {
  return (
    <div className="Status-container">
      <span>Status</span>
      <div>
        <img src={statusArrow} alt="statusArrow" />
      </div>
    </div>
  );
}

export default Status;
