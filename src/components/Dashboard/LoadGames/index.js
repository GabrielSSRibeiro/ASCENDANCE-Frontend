import React from "react";
import api from "../../../services/api";

import "./styles.css";

function LoadGames({ Functions, States, history }) {
  //function do click e history

  Functions();

  return (
    <>
      <div className="container justify-content-md-center ">
        {States.map(game => (
          <div className="col ">
            {/* user row cols */}

            <img className="" src="" alt="Check" />
            <span key={game._id} className="list-item">
              {game.name}
            </span>
            <img className="" src="" alt="Delete" />
            <div className="w-100"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LoadGames;
