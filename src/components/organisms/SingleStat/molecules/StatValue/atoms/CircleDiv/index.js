import React from "react";

import { Container } from "./styles.js";

function CircleDiv({ isEnhancebled, type, ...props }) {
  const variant = {
    default: {
      background: "disabledDarkPurple",
    },
    active: {
      gradient: "orangeGradient",
      shadow: "lightPurple",
      clickable: true,
    },
    success: {
      background: "regularGreen",
    },
    fail: {
      background: "regularRed",
    },
  };

  const divProps = {
    isEnhancebled,
    ...variant[type],
  };

  return <Container key={props.key} {...divProps} />;
}

export default CircleDiv;
