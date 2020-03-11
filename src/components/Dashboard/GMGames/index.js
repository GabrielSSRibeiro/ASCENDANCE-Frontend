import React, { useState } from "react";
import api from "../../../services/api";
import ReturnMenu from "../../ReturnMenu";
import NewGame from "./NewGame/";

import "./styles.css";
import deleteIcon from "../../../assets/edition/delete.png";
import checkIcon from "../../../assets/edition/check.png";

function PlayerGames(props) {
  const [newGame, setNewGame] = useState(false);

  function ReturnInitialScreen() {
    props.setGMGamesDisplay(!props.GMGamesDisplay);
    props.setInitialScreenDisplay(!props.initialScreenDisplay);
  }

  async function GMGamesList() {
    const user = localStorage.getItem("user");
    const response = await api.get("gm-games", { params: { user } });
    props.setGMGamesList(response.data);
  }

  function StartGame(name) {
    localStorage.setItem("game", name);
    props.history.push("/gm-panel");
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
      <ReturnMenu returnFunction={ReturnInitialScreen} title="Selecione o Jogo" />
      {!newGame ? (
        <>
          {props.GMGamesList.length > 0 ? (
            <>
              <div className="row align-items-center justify-content-center list-item">
                {props.GMGamesList.map(game => (
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
          ) : (
            <>
              <h1>Você ainda não criou nenhuma jogo.</h1> />
            </>
          )}
        </>
      ) : (
        <>
          <NewGame {...props} />
        </>
      )}
    </>
  );
}

export default PlayerGames;
