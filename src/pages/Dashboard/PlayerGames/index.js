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

  function ReturnDashboard() {
    history.push("/dashboard");
  }
  async function StartGame(title, GM) {
    localStorage.setItem("game", title);
    localStorage.setItem("GM", GM);

    const response = await api.get("gm-panel", { params: { GM, title } });
    const player = response.data.party.find((value) => value.user === localStorage.getItem("user"));
    localStorage.setItem("character", JSON.stringify(player));

    history.push(`/char-creation-${player.level + 1}`);
  }

  async function DeleteGame(title, GM) {
    const playerUser = localStorage.getItem("user");
    await api.delete("player-games", { params: { title, GM, playerUser } });

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
              {playerGamesList.map((game) => {
                let player;
                player = game.party.find((value) => value.user === localStorage.getItem("user"));

                return (
                  <section key={game._id}>
                    <header>
                      <span>{game.title}</span>
                      <img
                        src={deleteIcon}
                        onClick={() => DeleteGame(game.title, game.GM)}
                        alt="Icon made by kiranshastry from www.flaticon.com"
                      />
                    </header>
                    <div>
                      <div>{player.avatar ? player.avatar : player.race && "..."}</div>
                      <aside>
                        <span>
                          {/* charracter progress display */}
                          <strong>
                            {player.name
                              ? player.name
                              : player.race //checks if started creating
                              ? playerGames.inProgress
                              : playerGames.noCharacter}
                          </strong>
                        </span>
                        <span>
                          {/* only shows level if completely created */}
                          {player.name && (
                            <strong>
                              {playerGames.level} {player.level}
                            </strong>
                          )}
                        </span>
                        <img
                          onClick={() => StartGame(game.title, game.GM)}
                          src={checkIcon}
                          alt="Icon made by Pixel perfect from www.flaticon.com"
                        />
                      </aside>
                    </div>
                  </section>
                );
              })}
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
