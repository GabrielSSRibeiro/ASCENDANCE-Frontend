import React from "react";

import "./styles.css";

function StatSection({ display, setDisplay, content }) {
  const dictionary = Object.keys(content).map((item) => ({
    name: content[item],
    img: require(`../../../assets/playerPanel/${
      item + (content[item] === display ? "Selected" : "")
    }.png`),
    divStyle: content[item] === display ? "StatSection-divSelected" : "",
    textStyle: content[item] === display ? "StatSection-textSelected" : "",
    onClick: () => {
      content[item] === display ? setDisplay("") : setDisplay(content[item]);
    },
  }));

  return (
    <div className="StatSection-container">
      {dictionary.map((item) => (
        <div key={item.name} className={item.divStyle} onClick={item.onClick}>
          <img src={item.img} alt={item.name} />
          <span className={item.textStyle}>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default StatSection;
