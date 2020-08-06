import React from "react";

function ButtonDoubleSpan({ value, name, styles, onClick, key }) {
  return (
    <div key={key} className={styles.div} onClick={onClick}>
      <span className={styles.value}>{value}</span>
      <span className={styles.text}>{name}</span>
    </div>
  );
}

export default ButtonDoubleSpan;
