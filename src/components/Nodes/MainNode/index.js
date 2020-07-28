import React from "react";

import "./styles.css";

function MainNode({ current, total, ...title }) {
  //component caixa de valor que recebe a prob da mesma forma que esse pra fazer a api call

  return (
    <div className="MainNode-container">
      <div className={`${Object.keys(title)}`} />
      <span>
        <span>{current}</span>/{total}
      </span>
      <span>{Object.values(title)}</span>
    </div>
  );
}

export default MainNode;
