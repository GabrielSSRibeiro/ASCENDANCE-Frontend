import React, { useState, useEffect } from "react";
import api from "../../../services/api";

import NaviBar from "../../../components/NaviBar";
import ReturnMenu from "../../../components/ReturnMenu";
import GameList from "./components/GameList";

import { useLanguage } from "../../../contexts/language";
import "./styles.css";

function GMGames({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [gamesList, setGamesList] = useState();

  function ReturnDashboard() {
    history.push("/dashboard");
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
      <ReturnMenu returnFunction={ReturnDashboard} title={content.returnMenu} />
      {gamesList && (
        <main>
          {gamesList.length > 0 && (
            <section>
              <GameList gamesList={gamesList} setGamesList={setGamesList} history={history} />
            </section>
          )}
          {/* no games found */}
          {gamesList.length === 0 && <h1>{content.noGames}</h1>}
          <button className="std-button" onClick={NewGameClick}>
            {content.newGame}
          </button>
        </main>
      )}
    </div>
  );
}

export default GMGames;
