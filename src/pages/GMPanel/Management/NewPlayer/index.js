import React, { useState } from "react";
import api from "../../../../services/api";
import { newPlayer } from "../../../../utils/content";

import NaviBar from "../../../../components/NaviBar";
import ReturnMenu from "../../../../components/ReturnMenu";

import "./styles.css";

function NewPlayer({ history }) {
  const [playerUser, setPlayerUser] = useState();

  function ReturnManagement() {
    history.push("/gm-management");
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    const GM = localStorage.getItem("GM");
    const title = localStorage.getItem("game");
    const response = await api.put("gm-management", {
      GM,
      title,
      playerUser,
    });

    if (response.data !== "") {
      if (response.data !== "member") {
        localStorage.setItem("game", title);
        history.push("/gm-management");
      } else {
        alert(newPlayer.alreadyIn);
      }
    } else {
      alert(newPlayer.notFound);
    }
  }

  return (
    <div className="newPlayer-container">
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnManagement} title={newPlayer.returnMenu} />
      <main>
        <form onSubmit={HandleSubmit}>
          <label>{newPlayer.label}</label>
          <input onChange={(e) => setPlayerUser(e.target.value)}></input>

          <button className="std-button">{newPlayer.button}</button>
        </form>
      </main>
    </div>
  );
}
export default NewPlayer;
