import React from "react";

import StatSkill from "./organisms/StatSkill";
import StatCombat from "./organisms/StatCombat";
import StatMagic from "./organisms/StatMagic";

import "./styles.css";

function StatSection({ section, content, ...props }) {
  props.content = content[section];

  const variant = {
    skill: <StatSkill {...props} />,
    combat: <StatCombat {...props} />,
    magic: <StatMagic {...props} />,
  };

  return variant[section];
}

export default StatSection;
