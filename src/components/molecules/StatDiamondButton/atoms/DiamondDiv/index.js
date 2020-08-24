import React from "react";

import { Container } from "./styles.js";

function DiamondDiv({ ...props }) {
  return <Container key={props.key} />;
}

export default DiamondDiv;
