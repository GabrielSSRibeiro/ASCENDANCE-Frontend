import React from "react";

import "./styles.css";

function PlayerPanel({ history }) {
  const gameName = localStorage.getItem("game");
  return <h1>{gameName}</h1>;
}

export default PlayerPanel;
