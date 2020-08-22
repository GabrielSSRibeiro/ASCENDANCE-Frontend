import React from "react";
import CircleDiv from "~/components/atoms/CircleDiv";

import "./styles.css";

function StatSection({ player, content }) {
  return (
    <div className="StatSection-container">
      {Object.entries(content).map((stat, name) => (
        <div key={stat}>
          <CircleDiv value={player[stat]} content={content[name]} />
        </div>
      ))}
    </div>
  );
}

export default StatSection;
