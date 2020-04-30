import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import { subscribeToUser, unSubscribeToUser } from "../../../services/socket";
import { playerGames } from "../../../utils/content";

import NaviBar from "../../../components/NaviBar";
import ReturnMenu from "../../../components/ReturnMenu";

import "./styles.css";
import deleteIcon from "../../../assets/edition/delete.png";
import checkIcon from "../../../assets/edition/check.png";

function PlayerGames({ history }) {
  const [playerGamesList, setPlayerGamesList] = useState();

  let player;
  function GetPlayer(game) {
    player = game.party.find((value) => value.user === localStorage.getItem("user"));
  }

  function ReturnDashboard() {
    history.push("/dashboard");
  }
  function StartGame(title, GM) {
    localStorage.setItem("game", title);
    localStorage.setItem("GM", GM);
    history.push("/char-creation-race");
  }

  async function DeleteGame(title) {
    const playerUser = localStorage.getItem("user");
    await api.delete("player-games", { params: { title, playerUser } });

    const response = await api.get("player-games", { params: { user: playerUser } });
    setPlayerGamesList(response.data);
  }

  useEffect(() => {
    async function PlayerGamesList() {
      const user = localStorage.getItem("user");
      const response = await api.get("player-games", { params: { user } });

      setPlayerGamesList(response.data);
    }

    PlayerGamesList();
    // socket on
    subscribeToUser(PlayerGamesList);
    // socket off
    return () => unSubscribeToUser();
  }, []);

  return (
    <div className="player-container">
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnDashboard} title={playerGames.returnMenu} />
      {playerGamesList && (
        <main>
          {playerGamesList.length > 0 && (
            <>
              {playerGamesList.map((game) => (
                <section key={game._id}>
                  {GetPlayer(game)}
                  <header>
                    <span>{game.title}</span>
                    <img
                      src={deleteIcon}
                      onClick={() => DeleteGame(game.title)}
                      alt="Icon made by kiranshastry from www.flaticon.com"
                    />
                  </header>
                  <div>
                    <div>{player.avatar ? player.avatar : "..."}</div>
                    <aside>
                      <span>
                        <strong>{player.name ? player.name : "Sem Personagem"}</strong>
                      </span>
                      <span>
                        <strong>Nível {player.level}</strong>
                      </span>
                      <img
                        onClick={() => StartGame(game.title, game.GM)}
                        src={checkIcon}
                        alt="Icon made by Pixel perfect from www.flaticon.com"
                      />
                    </aside>
                  </div>
                </section>
              ))}
            </>
          )}
          {/* no games found */}
          {playerGamesList.length === 0 && <h1>{playerGames.noGames}</h1>}
        </main>
      )}
    </div>
  );
}

export default PlayerGames;
