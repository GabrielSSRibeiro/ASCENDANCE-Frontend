import React from "react";

import StatValue from "./molecules/StatValue";
import StatValueBuff from "./molecules/StatValueBuff";

import { Container } from "./styles.js";

function SingleStat({ isEnhancebled, value, name, onClick, ...props }) {
  return (
    <Container key={props.key}>
      <StatValue isEnhancebled={isEnhancebled} value={value} name={name} onClick={() => onClick} />
      <StatValueBuff isEnhancebled={isEnhancebled} onClick={() => onClick} />
    </Container>
  );
}

export default SingleStat;
