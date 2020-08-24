import React from "react";

import StatSkill from "./organisms/StatSkill";
import StatCombat from "./organisms/StatCombat";
import StatMagic from "./organisms/StatMagic";

import "./styles.css";

function StatSection({ section, ...props }) {
  const factory = {
    skill: <StatSkill {...props} />,
    combat: <StatCombat {...props} />,
    magic: <StatMagic {...props} />,
  };

  return factory[section];
}

export default StatSection;
