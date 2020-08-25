import React from "react";

import SmallDiamondDiv from "./atoms/SmallDiamondDiv";

import { Container } from "./styles.js";

function StatValueBuff({ isEnhancebled, onClick, ...props }) {
  return (
    <Container key={props.key} isEnhancebled={isEnhancebled} onClick={() => onClick}>
      <SmallDiamondDiv type={isEnhancebled ? "active" : "default"} />
      {isEnhancebled && <span>+</span>}
    </Container>
  );
}

export default StatValueBuff;
