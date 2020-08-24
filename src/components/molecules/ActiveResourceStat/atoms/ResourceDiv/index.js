import React from "react";

import { Container } from "./styles.js";

function ResourceDiv({ isEmpty, type, ...props }) {
  const variant = {
    red: {
      background: "redGradient",
      border: "20px 0 0 20px",
    },
    blue: {
      background: "blueGradient",
      border: "0 20px 20px 0",
    },
  };

  const divProps = variant[type];

  return <Container key={props.key} isEmpty={isEmpty} {...divProps} />;
}

export default ResourceDiv;
