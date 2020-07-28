import React from "react";

import "./styles.css";

function StatDisplay({ display, setDisplay, content }) {
  const dictionary = Object.keys(content).map((item) =>
    item !== display
      ? {
          name: content[item],
          img: require(`../../../assets/playerPanel/${item}.png`),
          divStyle: "",
          textStyle: "",
          onClick: () => setDisplay(item),
        }
      : {
          name: content[item],
          img: require(`../../../assets/playerPanel/${item}Selected.png`),
          divStyle: "StatDisplay-divSelected",
          textStyle: "StatDisplay-textSelected",
          onClick: () => setDisplay("default"),
        }
  );

  return (
    <div className="StatDisplay-container">
      {dictionary.map((item) => (
        <div key={item.name} className={item.divStyle} onClick={item.onClick}>
          <img src={item.img} alt={item.name} />
          <span className={item.textStyle}>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default StatDisplay;
