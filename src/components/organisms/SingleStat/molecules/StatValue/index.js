import React from "react";

import CircleDiv from "./atoms/CircleDiv";
import TextSpan from "~/components/atoms/TextSpan";

import { Container } from "./styles.js";

function StatValue({ isEnhancebled, value, name, onClick, ...props }) {
  return (
    <Container key={props.key} onClick={() => onClick}>
      <CircleDiv type="default" isEnhancebled={isEnhancebled} />
      <div>
        <TextSpan text={value} size="large" color="white" />
        <TextSpan text={name} size="small" color="white" />
      </div>
    </Container>
  );
}

export default StatValue;
