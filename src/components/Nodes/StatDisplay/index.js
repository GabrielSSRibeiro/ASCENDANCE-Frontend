import React from "react";
import CircleButtonWithIcon from "../../../Atoms/CircleButtonWithIcon";

import "./styles.css";

function StatDisplay({ display, setDisplay, content }) {
  const isActive = (selected, current) => selected === current;

  return (
    <div className="StatDisplay-container">
      {Object.entries(content).map(([stat, name]) => (
        <CircleButtonWithIcon
          key={stat}
          isActive={isActive(display, stat)}
          name={name}
          stat={stat}
          setDisplay={setDisplay}
        />
      ))}
    </div>
  );
}

export default StatDisplay;
