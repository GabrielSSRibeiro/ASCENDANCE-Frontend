import React from "react";
import UnlimitedCircleButton from "~atoms/UnlimitedCircleButton";

import "./styles.css";

function StatSection({ player, content }) {
  return (
    <div className="StatSection-container">
      {Object.entries(content).map((stat, name) => (
        <div key={stat}>
          <UnlimitedCircleButton value={player[stat]} content={content[name]} />
        </div>
      ))}
    </div>
  );
}

export default StatSection;
