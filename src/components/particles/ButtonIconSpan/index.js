import React from "react";

function ButtonIconSpan({ name, icon, classes, onClick, key }) {
  return (
    <div key={key} className={classes.div} onClick={onClick}>
      <img src={icon} alt={name} />
      <span className={classes.span}>{name}</span>
    </div>
  );
}

export default ButtonIconSpan;
