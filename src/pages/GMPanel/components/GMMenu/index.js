import React from "react";

import "./styles.css";

function GMMenu({ content, history }) {
  const tabs = Object.keys(content.button).map((item) => {
    return {
      name: content.button[item],
      img: require(`../../../../assets/GMMenu/${item}.png`),
      onClick: () => history.push(`/gm-${item}`),
    };
  });

  return (
    <div className="GMMenu-container">
      {tabs.map((item) => (
        <div key={item.name} onClick={item.onClick}>
          <img src={item.img} alt={item.name} />
          <button>{item.name}</button>
        </div>
      ))}
    </div>
  );
}

export default GMMenu;
