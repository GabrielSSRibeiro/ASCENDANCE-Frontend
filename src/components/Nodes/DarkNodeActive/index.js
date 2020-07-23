import React from "react";

import "./styles.css";

function DarkNodeActive({ current, total, title }) {
  return (
    <div className="DarkNodeActive-container">
      <div />
      <span>
        <span>{current}</span>/{total}
      </span>
      <span>{title}</span>
    </div>
  );
}

export default DarkNodeActive;
