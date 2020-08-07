import React from "react";
import StatDisplayButton from "./atoms/StatDisplayButton";

import "./styles.css";

function StatDisplay({ display, setDisplay, content }) {
  return (
    <div className="StatDisplay-container">
      {Object.entries(content).map(([stat, name]) => (
        <StatDisplayButton
          key={stat}
          isActive={display === stat}
          name={name}
          stat={stat}
          setDisplay={setDisplay}
        />
      ))}
    </div>
  );
}

export default StatDisplay;
