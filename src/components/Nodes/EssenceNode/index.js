import React from "react";

import "./styles.css";

function EssenceNode({ current, total, title }) {
  return (
    <div className="EssenceNode-container">
      <div />
      <span>
        <span>{current}</span>/{total}
      </span>
      <span>{title}</span>
    </div>
  );
}

export default EssenceNode;
