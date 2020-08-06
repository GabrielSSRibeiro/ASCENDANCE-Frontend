import React from "react";

function Button2xSpanSpan({ current, total, name, classes, onClick, key }) {
  return (
    <div key={key} className={classes.div} onClick={onClick}>
      <div>
        <span className={classes.span2}>
          <span className={classes.span1}>{current}</span>
          {total}
        </span>
        <span className={classes.span3}>{name}</span>
      </div>
    </div>
  );
}

export default Button2xSpanSpan;
