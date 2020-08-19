import React from "react";

import "./styles.css";

function DiamondButton({ stat, value, name, setBoxDisplay, ...props }) {
  const buttonProps = {
    value,
    name,
    styles: { div: `DiamondButton-container ${stat}` },
    onClick: () => setBoxDisplay(stat),
  };

  return (
    <div key={props.key} className={buttonProps.styles.div} onClick={buttonProps.onClick}>
      <div>
        <span>{value}</span>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default DiamondButton;
