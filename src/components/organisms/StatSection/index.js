import React from "react";

import SingleStat from "~/components/organisms/SingleStat";
import "./styles.css";

function StatSection({ player, content }) {
  return (
    <div className="StatSection-container">
      {content.map((stat) => (
        <SingleStat isEnhancebled={player.currentLife > 10} value={0} name={stat} />
      ))}
    </div>
  );
}

export default StatSection;
