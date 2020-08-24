import React from "react";

import DiamondDiv from "./atoms/DiamondDiv";
import TextSpan from "~/components/atoms/TextSpan";

import "./styles.css";

function StatDiamondButton({ stat, value, name, onClick, ...props }) {
  return (
    <div key={props.key} className="StatDiamondButton-container" onClick={() => onClick}>
      <DiamondDiv />
      <div>
        <TextSpan text={value} size="large" color="white" />
        <TextSpan text={name} size="small" color="white" />
      </div>
    </div>
  );
}

export default StatDiamondButton;
