import React from "react";

import "./styles.css";

function StatDisplayButton({ isActive, stat, name, setDisplay, ...props }) {
  const variant = isActive
    ? {
        img: require("~/assets/playerPanel/" + stat + "Selected.png"),
        styles: {
          div: "StatDisplayButton-container divSelected",
          span: "textSelected",
        },
        onClick: () => setDisplay(""),
      }
    : {
        img: require("~/assets/playerPanel/" + stat + ".png"),
        styles: {
          div: "StatDisplayButton-container StatDisplayButton-container",
          span: "",
        },
        onClick: () => setDisplay(stat),
      };

  const buttonProps = {
    name,
    ...variant,
  };

  return (
    <div key={props.key} className={buttonProps.styles.div} onClick={buttonProps.onClick}>
      <img src={buttonProps.img} alt={name} />
      <span className={buttonProps.styles.span}>{name}</span>
    </div>
  );
}

export default StatDisplayButton;
