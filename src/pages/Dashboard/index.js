import React, { useState } from "react";
import InitialScreen from "../../components/Dashboard/InitialScreen";
import NaviBar from "../../components/NaviBar";
import PlayerGames from "../../components/Dashboard/PlayerGames";
import GMGames from "../../components/Dashboard/GMGames";

import "./styles.css";

function Dashboard({ history }) {
  const [initialScreenDisplay, setInitialScreenDisplay] = useState(true);
  const [playerGamesDisplay, setPlayerGamesDisplay] = useState(false);
  const [playerGamesList, setPlayerGamesList] = useState([]);
  const [GMGamesDisplay, setGMGamesDisplay] = useState(false);
  const [GMGamesList, setGMGamesList] = useState([]);

  const states = {
    initialScreenDisplay,
    setInitialScreenDisplay,
    playerGamesDisplay,
    setPlayerGamesDisplay,
    playerGamesList,
    setPlayerGamesList,
    GMGamesDisplay,
    setGMGamesDisplay,
    GMGamesList,
    setGMGamesList,
    history
  };

  return (
    <>
      <NaviBar history={history} />
      <InitialScreen {...states} />
      {/* list of player's games */}
      {playerGamesDisplay ? (
        <>
          <PlayerGames {...states} />
        </>
      ) : (
        ""
      )}
      {/* list of GM's games */}
      {GMGamesDisplay ? (
        <>
          <GMGames {...states} />;
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Dashboard;
