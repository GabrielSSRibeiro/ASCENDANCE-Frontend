import React from "react";

import DiamondDiv from "./atoms/DiamondDiv";

import "./styles.css";

function StatDiamondButton({ stat, value, name, onClick, ...props }) {
  return (
    <div key={props.key} className="StatDiamondButton-container" onClick={() => onClick}>
      <DiamondDiv />
      <div>
        <span>{value}</span>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default StatDiamondButton;
