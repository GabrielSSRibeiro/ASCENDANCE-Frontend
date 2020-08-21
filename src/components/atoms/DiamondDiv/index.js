import React from "react";

import "./styles.css";

function DiamondDiv({ ...props }) {
  return <div key={props.key} className="DiamondDiv-container" />;
}

export default DiamondDiv;
