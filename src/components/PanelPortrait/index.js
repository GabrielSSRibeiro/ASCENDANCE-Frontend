import React from "react";

import "./styles.css";
import frame from "../../assets/playerPanel/frame.png";

function PanelPortrait({ image }) {
  return (
    <div className="PanelPortrait-container">
      <img src={frame} alt="avatar" />
      <div
        className="avatar"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "100%" }}
      />
    </div>
  );
}

export default PanelPortrait;
