import React from "react";

import "./styles.css";

function DetailDisplay({ display, setDisplay, content }) {
  const dictionary = Object.keys(content).map((item) => ({
    name: content[item],
    img: require(`../../assets/playerPanel/${
      item + (content[item] === display ? "Selected" : "")
    }.png`),
    divStyle: content[item] === display ? "DetailDisplay-divSelected" : "",
    textStyle: content[item] === display ? "DetailDisplay-textSelected" : "",
    onClick: () => {
      content[item] === display ? setDisplay("") : setDisplay(content[item]);
    },
  }));

  return (
    <div className="DetailDisplay-container">
      {dictionary.map((item) => (
        <div key={item.name} className={item.divStyle} onClick={item.onClick}>
          <img src={item.img} alt={item.name} />
          <span className={item.textStyle}>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default DetailDisplay;
