import React, { useState, useEffect } from "react";
import api from "../../services/api";
import InitialScreen from "../../components/Dashboard/InitialScreen";
import NaviBar from "../../components/NaviBar";
import ReturnMenu from "../../components/ReturnMenu";
import LoadGames from "../../components/Dashboard/LoadGames";

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

      //const response = await api.get("user", { params: { nickName } });

      setUserName(nickName); //response.data.nickName
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
      <NaviBar States={userName} Route={history} />
      <InitialScreen
        Functions={{ PlayerButtonClick, GMButtonClick }}
        States={{ initialScreen, setInitialScreen }}
      />
      {playerGameList ? (
        <>
          <ReturnMenu Functions={PlayerButtonClick} Title="Selecione o Jogo" />
          <LoadGames Functions={PlayerGamesList} States={games} Route={history} />
        </>
      ) : (
        ""
      )}

      {GMGameList ? (
        <>
          <ReturnMenu Functions={GMButtonClick} Title="Selecione o Jogo" />
          <LoadGames Functions={GMGamesList} States={games} Route={history} />

          {/* newGame component */}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Dashboard;
