import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/auth";

import NaviBar from "../../components/NaviBar";
import MembersBar from "../../components/MembersBar";
import PlayerMenu from "./components/PlayerMenu";
import LifeNode from "../../components/Nodes/LifeNode";
import EssenceNode from "../../components/Nodes/EssenceNode";
import DarkNodeActive from "../../components/Nodes/DarkNodeActive";
import LightNodeActive from "../../components/Nodes/LightNodeActive";
import ActionButtonActive from "./components/Actions/ActionButtonActive";
import ActionButton from "./components/Actions/ActionButton";
import Status from "./components/Status";
import DetailDisplay from "../../components/DetailDisplay";
import PanelPortrait from "../../components/PanelPortrait";

import { useLanguage } from "../../contexts/language";
import "./styles.css";

function PlayerPanel({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [display, setDisplay] = useState("");
  const [action, setAction] = useState(false);
  const [player, setPlayer] = useState();

  const { signedApiCall } = useAuth();

  useEffect(() => {
    const GM = localStorage.getItem("GM");
    const title = localStorage.getItem("game");

    function PlayerData() {
      signedApiCall("get", "player-character", { params: { GM, title } }).then((response) => {
        setPlayer(response.data);
      });
    }

    PlayerData();
  }, [signedApiCall]);

  useEffect(() => {
    //get GM signal por action time
    setAction(true);
  }, []);

  return (
    <div className="PlayerPanel-container">
      <NaviBar history={history} />
      <PlayerMenu content={content} history={history} />
      {player && (
        <main>
          {display === "" && <Status />}

          <aside>
            {display === content.detailDisplay.skill && <h1>skill</h1>}
            {display === content.detailDisplay.combat && <h1>combat</h1>}
            {display === content.detailDisplay.magic && <h1>magic</h1>}
          </aside>

          <main>
            <span>{player.name}</span>

            <div className="profile">
              <PanelPortrait image={player.avatar} />

              <main>
                <LifeNode current={player.currentLife} total={player.totalLife} title={"Vida"} />
                <EssenceNode
                  current={player.currentEssence}
                  total={player.totalEssence}
                  title={"Essência"}
                />
              </main>
            </div>

            <div className="details">
              <DetailDisplay
                display={display}
                setDisplay={setDisplay}
                content={content.detailDisplay}
              />
            </div>

            <div className="action">
              <DarkNodeActive current={player.exaustion} total={"x"} title={"Exaustão"} />
              {action ? <ActionButtonActive /> : <ActionButton />}
              <LightNodeActive current={player.inspiration} total={"x"} title={"Inspiração"} />
            </div>
          </main>

          <aside>
            {display === content.detailDisplay.skill && <h1>skill</h1>}
            {display === content.detailDisplay.combat && <h1>combat</h1>}
            {display === content.detailDisplay.magic && <h1>magic</h1>}
          </aside>
        </main>
      )}
      <MembersBar history={history} />
    </div>
  );
}

export default PlayerPanel;
