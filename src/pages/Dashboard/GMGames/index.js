import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import content from "../../../utils/content";

import NaviBar from "../../../components/NaviBar";
import ReturnMenu from "../../../components/ReturnMenu";

import "./styles.css";
import deleteIcon from "../../../assets/edition/delete.png";
import checkIcon from "../../../assets/edition/check.png";

function GMGames({ history }) {
  const [gamesList, setGamesList] = useState();

  function ReturnDashboard() {
    history.push("/dashboard");
  }

  function StartGame(title, GM) {
    localStorage.setItem("game", title);
    localStorage.setItem("GM", GM);
    history.push("/gm-panel");
  }

  async function DeleteGame(title) {
    const GM = localStorage.getItem("user");
    const response = await api.delete("gm-games", { params: { GM, title } });

    setGamesList(response.data);
  }

  function NewGameClick() {
    history.push("/dashboard-gm-list-new-game");
  }

  useEffect(() => {
    async function GMGamesList() {
      const GM = localStorage.getItem("user");
      const response = await api.get("gm-games", { params: { GM } });
      setGamesList(response.data);
    }

    GMGamesList();
  }, []);

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnDashboard} title="Selecione o Jogo" />
      {gamesList && (
        <>
          {gamesList.length > 0 && (
            <div className="row align-items-center justify-content-center GMGames-list">
              {gamesList.map(game => (
                <React.Fragment key={game._id}>
                  <div className="col-auto GMGames-item-container">
                    <img
                      className="GMGames-check-img"
                      onClick={() => StartGame(game.title, game.GM)}
                      src={checkIcon}
                      alt="Icon made by Pixel perfect from www.flaticon.com"
                    />
                    <span className="GMGames-item">{game.title}</span>
                    <img
                      className="GMGames-delete-img"
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
          {gamesList.length === 0 && <h1 className="noGames-h1">{content.GMGames}</h1>}
          <button className="std-button" onClick={NewGameClick}>
            {content.dashboard.button.newGame}
          </button>
        </>
      )}
    </>
  );
}

export default GMGames;
