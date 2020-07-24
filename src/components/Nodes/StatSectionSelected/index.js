import React from "react";

import "./styles.css";

function StatSectionSelected({ stat, content, setDisplay }) {
  return (
    <div className="StatSectionSelected-container">
      <div onClick={() => setDisplay("")}>
        <img src={require(`../../../assets/playerPanel/${stat}Selected.png`)} alt={content} />
        <span>{content}</span>
      </div>
    </div>
  );
}

export default StatSectionSelected;
