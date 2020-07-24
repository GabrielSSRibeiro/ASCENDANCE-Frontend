import React from "react";

import "./styles.css";

function PlayerMenu({ content, history }) {
  const tabs = Object.keys(content.menu).map((item) => {
    return {
      name: content.menu[item],
      img: require(`../../../../assets/playerMenu/${item}.png`),
      onClick: () => history.push(`/player-${item}`),
    };
  });

  return (
    <div className="PlayerMenu-container">
      {tabs.map((item) => (
        <div key={item.name} onClick={item.onClick}>
          <img src={item.img} alt={item.name} />
          <button>{item.name}</button>
        </div>
      ))}
    </div>
  );
}

export default PlayerMenu;
