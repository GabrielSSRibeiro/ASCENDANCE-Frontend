import React from "react";

import "./styles.css";

function StatSection({ stat, content, setDisplay }) {
  return (
    <div className="StatSection-container">
      <div onClick={() => setDisplay(content)}>
        <img src={require(`../../../assets/playerPanel/${stat}.png`)} alt={content} />
        <span>{content}</span>
      </div>
    </div>
  );
}

export default StatSection;
