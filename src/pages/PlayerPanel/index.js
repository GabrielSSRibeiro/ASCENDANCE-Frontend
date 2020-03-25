import React from "react";

import "./styles.css";

function PlayerPanel({ history }) {
  const title = localStorage.getItem("game");
  return <h1>{title}</h1>;
}

export default PlayerPanel;
