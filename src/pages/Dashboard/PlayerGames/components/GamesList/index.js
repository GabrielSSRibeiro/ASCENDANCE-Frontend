import React, { useState } from "react";
import api from "../../../../../services/api";

import "./styles.css";
import deleteIcon from "../../../../../assets/edition/delete.png";
import checkIcon from "../../../../../assets/edition/check.png";

function GamesList({ history }) {
  const [playerGamesList, setPlayerGamesList] = useState([]);

  function StartGame(name) {
    localStorage.setItem("game", name);
    history.push("/player-panel");
  }

  async function DeleteGame(name) {
    const playerUser = localStorage.getItem("user");
    await api.delete("player-games", { params: { name, playerUser } });
  }

  async function PlayerGamesList() {
    const user = localStorage.getItem("user");
    const response = await api.get("player-games", { params: { user } });
    setPlayerGamesList(response.data);
  }
  PlayerGamesList();

  return (
    <>
      <div
        className="row align-items-center justify-content-center playerGames-list"
        style={{ display: playerGamesList.length > 0 ? "" : "none" }}
      >
        {playerGamesList.map(game => (
          <>
            <div key={game._id} className="col-auto playerGames-item-container">
              <img
                className="playerGames-check-img"
                onClick={() => StartGame(game.name)}
                src={checkIcon}
                alt="Icon made by Pixel perfect from www.flaticon.com"
              />
              <span className="playerGames-item">{game.name}</span>
              <img
                className="playerGames-delete-img"
                src={deleteIcon}
                onClick={() => DeleteGame(game.name)}
                alt="Icon made by kiranshastry from www.flaticon.com"
              />
            </div>
            <div className="w-100"></div>
          </>
        ))}
      </div>
      {/* no games found */}
      <h1 className="noGames-h1" style={{ display: playerGamesList.length > 0 ? "none" : "" }}>
        Você ainda não participa de nenhuma jogo.
      </h1>
    </>
  );
}

export default GamesList;
