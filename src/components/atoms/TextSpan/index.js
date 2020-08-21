import React from "react";

import { Container } from "./styles.js";

function TextSpan({ text, size, color, ...props }) {
  return (
    <Container size={size} color={color}>
      <span key={props.key}>{text}</span>
    </Container>
  );
}

export default TextSpan;
