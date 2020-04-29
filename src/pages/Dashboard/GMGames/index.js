import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import { gmGames } from "../../../utils/content";
import { dashboard } from "../../../utils/content";

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
    <div className="GMGames-container">
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnDashboard} title={gmGames.returnMenu} />
      {gamesList && (
        <main>
          {gamesList.length > 0 && (
            <section>
              {gamesList.map((game) => (
                <div key={game._id}>
                  <img
                    onClick={() => StartGame(game.title, game.GM)}
                    src={checkIcon}
                    alt="Icon made by Pixel perfect from www.flaticon.com"
                  />
                  <span>{game.title}</span>
                  <img
                    src={deleteIcon}
                    onClick={() => DeleteGame(game.title)}
                    alt="Icon made by kiranshastry from www.flaticon.com"
                  />
                </div>
              ))}
            </section>
          )}
          {/* no games found */}
          {gamesList.length === 0 && <h1>{gmGames.noGames}</h1>}
          <button className="std-button" onClick={NewGameClick}>
            {dashboard.button.newGame}
          </button>
        </main>
      )}
    </div>
  );
}

export default GMGames;
