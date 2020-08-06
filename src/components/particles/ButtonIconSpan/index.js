import React from "react";

function ButtonIconSpan({ name, icon, styles, onClick, key }) {
  return (
    <div key={key} className={styles.div} onClick={onClick}>
      <img src={icon} alt={name} />
      <span className={styles.text}>{name}</span>
    </div>
  );
}

export default ButtonIconSpan;
