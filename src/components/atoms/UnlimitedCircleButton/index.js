// criar a molecula dele com o d6
// tbm criar outra molecula que dentro tem um component com duas moleculas do botao com d6 e a img do atributo dele. mapeia 3

import React from "react";

import "./styles.css";

function UnlimitedCircleButton({ value, content }) {
  return (
    <div className="UnlimitedCircleButton-container">
      <span>{value}</span>
      <span>{content}</span>
      <div>
        <div />
      </div>
    </div>
  );
}

export default UnlimitedCircleButton;
