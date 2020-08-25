import React, { useState, useEffect } from "react";
import { useAuth } from "~/contexts/auth";
import { useLanguage } from "~/contexts/language";

import ActiveResourceStat from "~/components/molecules/ActiveResourceStat";
import NaviBar from "~/components/organisms/NaviBar";
import MembersBar from "~/components/organisms/MembersBar";
import StatDisplay from "~/components/organisms/StatDisplay";
import StatSection from "~/components/organisms/StatSection";
import PanelPortrait from "~/components/organisms/PanelPortrait";

import ActionButtonActive from "./components/Actions/ActionButtonActive";
import PlayerMenu from "./components/PlayerMenu";
import Status from "./components/Status";

import "./styles.css";

function PlayerPanel({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [display, setDisplay] = useState("");
  // const [actionDisplay, setActionDisplay] = useState(false);
  // const [boxDisplay, setBoxDisplay] = useState("");
  // const [action, setAction] = useState(false);
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
    // setAction(true);
  }, []);

  return (
    <div className="PlayerPanel-container">
      <NaviBar history={history} />
      <PlayerMenu content={content} history={history} />
      {player && (
        <main>
          {display === "" && <Status />}

          {display !== "" && (
            <aside>
              <StatSection
                side="left"
                section={display}
                player={player}
                content={content.statSection}
              />
            </aside>
          )}

          <main>
            <span>{player.name}</span>

            <div className="profile">
              <PanelPortrait image={player.avatar} />
            </div>

            <div className="details">
              <StatDisplay
                display={display}
                setDisplay={setDisplay}
                content={content.statDisplay}
              />
            </div>

            <div className="action">
              <div>
                <ActiveResourceStat
                  resource="life"
                  currentValue={player.currentLife}
                  totalValue={player.totalLife}
                  name={content.mainNode.life}
                  onClick={() => {}}
                />
              </div>

              <ActionButtonActive />

              <div>
                <ActiveResourceStat
                  resource="essence"
                  currentValue={player.currentEssence}
                  totalValue={player.totalEssence}
                  name={content.mainNode.essence}
                  onClick={() => {}}
                />
              </div>
            </div>
          </main>

          {display !== "" && (
            <aside>
              <StatSection
                side="right"
                section={display}
                player={player}
                content={content.statSection}
              />
            </aside>
          )}
        </main>
      )}
      <MembersBar history={history} />
    </div>
  );
}

export default PlayerPanel;
