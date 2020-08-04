import React from "react";

import "./styles.css";

function GeneralNode({ value, content }) {
  return (
    <div className="GeneralNode-container">
      <span>{value}</span>
      <span>{content}</span>
      <div>
        <div />
      </div>
    </div>
  );
}

export default GeneralNode;
