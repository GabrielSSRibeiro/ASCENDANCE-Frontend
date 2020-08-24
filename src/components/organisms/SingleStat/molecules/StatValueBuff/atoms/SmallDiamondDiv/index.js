import React from "react";

import { Container } from "./styles.js";

function SmallDiamondDiv({ type, ...props }) {
  const variant = {
    default: {
      background: "disabledLightPurple",
    },
    active: {
      gradient: "silverGradient",
      shadow: "darkPurple",
    },
    success: {
      background: "regularGreen",
    },
    fail: {
      background: "regularRed",
    },
  };

  const divProps = variant[type];

  return <Container key={props.key} {...divProps} />;
}

export default SmallDiamondDiv;
