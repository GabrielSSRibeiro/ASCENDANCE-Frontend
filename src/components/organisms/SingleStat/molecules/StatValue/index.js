import React from "react";

import CircleDiv from "./atoms/CircleDiv";

import { Container } from "./styles.js";

function StatValue({ isEnhancebled, value, name, onClick, ...props }) {
  return (
    <Container key={props.key} onClick={() => onClick}>
      <CircleDiv type="default" isEnhancebled={isEnhancebled} />
      <div>
        <span>{value}</span>
        <span>{name}</span>
      </div>
    </Container>
  );
}

export default StatValue;
