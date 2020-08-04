import React from "react";
import GeneralNode from "../GeneralNode";

import "./styles.css";

function StatSection({ player, content }) {
  return (
    <div className="StatSection-container">
      {Object.entries(content).map((stat) => (
        <div key={stat[0]}>
          <GeneralNode value={player[stat[0]]} content={content[stat[0]]} />
        </div>
      ))}
    </div>
  );
}

export default StatSection;
