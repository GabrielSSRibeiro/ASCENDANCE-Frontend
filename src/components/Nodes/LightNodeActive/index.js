import React from "react";

import "./styles.css";

function LightNodeActive({ current, total, title }) {
  return (
    <div className="LightNodeActive-container">
      <div />
      <span>
        <span>{current}</span>/{total}
      </span>
      <span>{title}</span>
    </div>
  );
}

export default LightNodeActive;
