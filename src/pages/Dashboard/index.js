import React, { useState, useEffect } from "react";
import api from "../../services/api";
import InitialScreen from "../../components/Dashboard/InitialScreen";
import NaviBar from "../../components/NaviBar";
import ReturnMenu from "../../components/ReturnMenu";
import PlayerGames from "../../components/Dashboard/PlayerGames";
import GMGames from "../../components/Dashboard/GMGames";

import "./styles.css";

function Dashboard({ history }) {
  const [userName, setUserName] = useState();
  const [initialScreen, setInitialScreen] = useState(true);

  const [playerGameList, setPlayerGameList] = useState(false);
  const [GMGameList, setGMGameList] = useState(false);

  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getUser() {
      const nickName = localStorage.getItem("user");
      setUserName(nickName);
    }

    getUser();
  }, []);

  function PlayerButtonClick() {
    setInitialScreen(!initialScreen);
    setPlayerGameList(!playerGameList);
  }

  function GMButtonClick() {
    setInitialScreen(!initialScreen);
    setGMGameList(!GMGameList);
  }

  async function GMGamesList() {
    const user = localStorage.getItem("user");
    const response = await api.get("gm-games", { params: { user } });
    setGames(response.data);
  }

  async function PlayerGamesList() {
    const party = localStorage.getItem("user");
    const response = await api.get("player-games", { params: { party } });
    setGames(response.data);
  }

  return (
    <>
      <NaviBar userName={userName} history={history} />
      <InitialScreen
        PlayerButtonClick={PlayerButtonClick}
        GMButtonClick={GMButtonClick}
        initialScreen={initialScreen}
      />
      {playerGameList ? (
        <>
          <ReturnMenu propFunction={PlayerButtonClick} title="Seleção de Jogo" />
          <PlayerGames PlayerGamesList={PlayerGamesList} games={games} history={history} />
        </>
      ) : (
        ""
      )}

      {GMGameList ? (
        <>
          <ReturnMenu propFunction={GMButtonClick} title="Selecione o Jogo" />
          <GMGames GMGamesList={GMGamesList} games={games} history={history} />;
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Dashboard;
