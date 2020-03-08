import React from "react";
import api from "../../../services/api";

import "./styles.css";
import deleteIcon from "../../../assets/edition/delete.png";
import checkIcon from "../../../assets/edition/check.png";

function PlayerGames({ PlayerGamesList, games, history }) {
  function StartGame(name) {
    localStorage.setItem("game", name);
    history.push("/player-panel");
  }

  async function DeleteGame(name) {
    const party = localStorage.getItem("user");
    await api.delete("player-games", { params: { name, party } });
  }
  PlayerGamesList();

  return (
    <>
      {games.length > 0 ? (
        <div className="row align-items-center justify-content-center list-item">
          {games.map(game => (
            <>
              <div key={game._id} className="col-auto item-container">
                <img
                  className="check-img"
                  onClick={() => StartGame(game.name)}
                  src={checkIcon}
                  alt="Icon made by Pixel perfect from www.flaticon.com"
                />
                <span className="item">{game.name}</span>
                <img
                  className="delete-img"
                  src={deleteIcon}
                  onClick={() => DeleteGame(game.name)}
                  alt="Icon made by kiranshastry from www.flaticon.com"
                />
              </div>
              <div className="w-100"></div>
            </>
          ))}
        </div>
      ) : (
        <>
          <h1>Você ainda não participa de nenhuma jogo.</h1>
        </>
      )}
    </>
  );
}

export default PlayerGames;
