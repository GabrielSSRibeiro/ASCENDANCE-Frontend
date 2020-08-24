import React from "react";

import SmallDiamondDiv from "./atoms/SmallDiamondDiv";
import TextSpan from "~/components/atoms/TextSpan";

import { Container } from "./styles.js";

function StatValueBuff({ isEnhancebled, onClick, ...props }) {
  return (
    <Container key={props.key} onClick={() => onClick}>
      <SmallDiamondDiv type={isEnhancebled ? "active" : "default"} />
      {isEnhancebled && <TextSpan text="+" size="extra" color="regularPurple" />}
    </Container>
  );
}

export default StatValueBuff;
