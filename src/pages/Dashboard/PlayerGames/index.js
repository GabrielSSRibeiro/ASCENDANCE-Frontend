import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import { subscribeToUser, unSubscribeToUser } from "../../../services/socket";
import content from "../../../utils/content";

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
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnDashboard} title="Seleção de Jogo" />
      {playerGamesList && (
        <>
          {playerGamesList.length > 0 && (
            <div className="row align-items-center justify-content-center playerGames-list">
              {playerGamesList.map(game => (
                <React.Fragment key={game._id}>
                  <div className="col-auto playerGames-item-container">
                    <img
                      className="playerGames-check-img"
                      onClick={() => StartGame(game.title, game.GM)}
                      src={checkIcon}
                      alt="Icon made by Pixel perfect from www.flaticon.com"
                    />
                    <span className="playerGames-item">{game.title}</span>
                    <img
                      className="playerGames-delete-img"
                      src={deleteIcon}
                      onClick={() => DeleteGame(game.title)}
                      alt="Icon made by kiranshastry from www.flaticon.com"
                    />
                  </div>
                  <div className="w-100"></div>
                </React.Fragment>
              ))}
            </div>
          )}

          {/* no games found */}
          {playerGamesList.length === 0 && <h1 className="noGames-h1">{content.playerGames}</h1>}
        </>
      )}
    </>
  );
}

export default PlayerGames;
