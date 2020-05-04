import React, { useState } from "react";
import api from "../../../../services/api";
import { newGame } from "../../../../utils/content";

import NaviBar from "../../../../components/NaviBar";
import ReturnMenu from "../../../../components/ReturnMenu";

import "./styles.css";

function NewGame({ history }) {
  const [title, setTitle] = useState();

  function ReturnGMGamesList() {
    history.push("/dashboard-gm-list");
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    const GM = localStorage.getItem("user");
    const response = await api.post("gm-games", {
      GM,
      title,
    });

    if (!(response.data === "")) {
      localStorage.setItem("game", title);
      localStorage.setItem("GM", GM);
      history.push("/gm-panel");
    } else {
      alert(newGame.takenName);
    }
  }

  return (
    <div className="newGame-container">
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnGMGamesList} title={newGame.returnMenu} />
      <main>
        <form onSubmit={HandleSubmit}>
          <label>{newGame.label}</label>
          <input onChange={(e) => setTitle(e.target.value)}></input>

          <button className="std-button">{newGame.button}</button>
        </form>
      </main>
    </div>
  );
}
export default NewGame;
