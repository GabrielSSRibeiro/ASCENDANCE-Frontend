import React from "react";

import "./styles.css";

function LifeNode({ current, total, title }) {
  return (
    <div className="LifeNode-container">
      <div />
      <span>
        <span>{current}</span>/{total}
      </span>
      <span>{title}</span>
    </div>
  );
}

export default LifeNode;
