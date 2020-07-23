import React from "react";

import "./styles.css";

function DetailDisplay({ content }) {
  const dictionary = Object.keys(content).map((item) => {
    return {
      name: content[item],
      img: require(`../../assets/playerPanel/${item}.png`),
      onClick: () => {},
    };
  });

  return (
    <div className="DetailDisplay-container">
      {dictionary.map((item) => (
        <div key={item.name} onClick={item.onClick}>
          <img src={item.img} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default DetailDisplay;
