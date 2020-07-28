import React from "react";

import "./styles.css";

function LifeNode({ current, total, ...props }) {
  //component caixa de valor que recebe a prob da mesma forma que esse pra fazer a api call

  return (
    <div className="LifeNode-container">
      <div className={`${Object.keys(props)}`} />
      <span>
        <span>{current}</span>/{total}
      </span>
      <span>{Object.values(props)}</span>
    </div>
  );
}

export default LifeNode;
