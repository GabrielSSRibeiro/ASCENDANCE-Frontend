import React from "react";
import { gmPanel } from "../../utils/content";
import NaviBar from "../../components/NaviBar";
import MembersBar from "../../components/MembersBar";

import "./styles.css";

function GMPanel({ history }) {
  const tabs = Object.keys(gmPanel.button).map((item) => {
    return {
      name: gmPanel.button[item],
      img: require(`../../assets/GMMenu/${item}.png`),
      onClick: () => history.push(`/gm-${item}`),
    };
  });

  return (
    <div className="GMPanel-container">
      <NaviBar history={history} />
      <header>
        {tabs.map((item) => (
          <div key={item.name} onClick={item.onClick}>
            <img src={item.img} alt="management" />
            <button>{item.name}</button>
          </div>
        ))}
      </header>
      <MembersBar />
    </div>
  );
}

export default GMPanel;
