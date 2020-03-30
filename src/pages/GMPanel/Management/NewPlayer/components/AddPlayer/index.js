import React, { useState } from "react";
import content from "../../../../../../utils/content";
import api from "../../../../../../services/api";

function AddPlayer({ history }) {
  const [playerUser, setPlayerUser] = useState();

  async function HandleSubmit(e) {
    e.preventDefault();

    const GM = localStorage.getItem("GM");
    const title = localStorage.getItem("game");
    const response = await api.put("gm-management", {
      GM,
      title,
      playerUser
    });

    if (!(response.data === "")) {
      localStorage.setItem("game", title);
      history.push("/gm-management");
    } else {
      alert("Usuário não encontrado.");
    }
  }
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div className="row justify-content-md-center addPlayer-box">
          <div className="col-sm-auto">
            <label className="addPlayer-label" htmlFor="name">
              {content.newPlayer.label}
            </label>

            <div className="w-100"></div>

            <input
              className="addPlayer-input"
              onChange={e => setPlayerUser(e.target.value)}
            ></input>

            <div className="w-100"></div>

            <div className="col-sm">
              <button className="dashboard-button std-button">{content.newPlayer.button}</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddPlayer;
