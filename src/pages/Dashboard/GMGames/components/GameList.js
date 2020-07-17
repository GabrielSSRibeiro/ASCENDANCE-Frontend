import React from "react";
import { useAuth } from "../../../../contexts/auth";

import deleteIcon from "../../../../assets/edition/delete.png";
import checkIcon from "../../../../assets/edition/check.png";

function GameList({ gamesList, setGamesList, history }) {
  const { signedApiCall } = useAuth();

  function StartGame(title, GM) {
    localStorage.setItem("game", title);
    localStorage.setItem("GM", GM);
    history.push("/gm-panel");
  }

  async function DeleteGame(title) {
    const response = await signedApiCall("delete", "gm-games", { params: { title } });

    setGamesList(response.data);
  }

  return (
    <>
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
    </>
  );
}

export default GameList;
