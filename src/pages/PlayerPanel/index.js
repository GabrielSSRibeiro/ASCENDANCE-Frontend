import React, { useState, useEffect } from "react";
import NaviBar from "../../components/NaviBar";
import MembersBar from "../../components/MembersBar";
import PlayerMenu from "./components/PlayerMenu";
import LifeNode from "../../components/Nodes/LifeNode";
import EssenceNode from "../../components/Nodes/EssenceNode";
import DarkNodeActive from "../../components/Nodes/DarkNodeActive";
import LightNodeActive from "../../components/Nodes/LightNodeActive";
import ActionButtonActive from "./components/Actions/ActionButtonActive";
import Status from "./components/Status";
import DetailDisplay from "../../components/DetailDisplay";

import { useLanguage } from "../../contexts/language";
import "./styles.css";

import frame from "../../assets/playerPanel/frame.png";

function PlayerPanel({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);

  return (
    <div className="PlayerPanel-container">
      <NaviBar history={history} />
      <PlayerMenu content={content} history={history} />
      <main>
        <Status />

        <span>Maximus Largon Grandel</span>

        <div className="profile">
          <aside>
            <img src={frame} alt="avatar" />
            <label
              className="avatar"
              style={{ backgroundImage: `url(${""})`, backgroundSize: "100%" }}
            />
          </aside>

          <main>
            <LifeNode current={"28"} total={"50"} title={"Vida"} />
            <EssenceNode current={"8"} total={"10"} title={"Essência"} />
          </main>
        </div>

        <div className="details">
          <DetailDisplay content={content.detailDisplay} />
        </div>

        <div className="action">
          <DarkNodeActive current={"12"} total={"x"} title={"Exaustão"} />
          <ActionButtonActive />
          <LightNodeActive current={"21"} total={"x"} title={"Inspiração"} />
        </div>
      </main>
      <MembersBar history={history} />
    </div>
  );
}

export default PlayerPanel;
