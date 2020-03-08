import React, { useState } from "react";
import api from "../../../services/api";
import NewGame from "./NewGame/";

import "./styles.css";
import deleteIcon from "../../../assets/edition/delete.png";
import checkIcon from "../../../assets/edition/check.png";

function PlayerGames({ GMGamesList, games, history }) {
  const [newGame, setNewGame] = useState(false);

  function StartGame(name) {
    localStorage.setItem("game", name);
    history.push("/gm-panel");
  }

  async function DeleteGame(name) {
    const user = localStorage.getItem("user");
    await api.delete("gm-games", { params: { user, name } });
  }

  async function NewGameClick() {
    setNewGame(!newGame);
  }

  GMGamesList();

  return (
    <>
      {!newGame ? (
        <>
          {" "}
          <>
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
            <button className="std-button" onClick={NewGameClick}>
              Novo
            </button>
          </>
        </>
      ) : (
        <>
          <NewGame games={games} history={history} />
        </>
      )}
    </>
  );
}

export default PlayerGames;
