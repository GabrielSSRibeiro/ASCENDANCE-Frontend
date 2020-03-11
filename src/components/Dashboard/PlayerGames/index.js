import React from "react";
import api from "../../../services/api";
import ReturnMenu from "../../ReturnMenu";

import "./styles.css";
import deleteIcon from "../../../assets/edition/delete.png";
import checkIcon from "../../../assets/edition/check.png";

function PlayerGames(props) {
  function ReturnInitialScreen() {
    props.setPlayerGamesDisplay(!props.playerGamesDisplay);
    props.setInitialScreenDisplay(!props.initialScreenDisplay);
  }

  async function PlayerGamesList() {
    const party = localStorage.getItem("user");
    const response = await api.get("player-games", { params: { party } });
    props.setPlayerGamesList(response.data);
  }

  function StartGame(name) {
    localStorage.setItem("game", name);
    props.history.push("/player-panel");
  }

  async function DeleteGame(name) {
    const party = localStorage.getItem("user");
    await api.delete("player-games", { params: { name, party } });
  }

  PlayerGamesList();
  return (
    <>
      <ReturnMenu returnFunction={ReturnInitialScreen} title="Seleção de Jogo" />
      {props.playerGamesList.length > 0 ? (
        <div className="row align-items-center justify-content-center list-item">
          {props.playerGamesList.map(game => (
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
