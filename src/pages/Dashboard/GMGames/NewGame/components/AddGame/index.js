import React, { useState } from "react";
import api from "../../../../../../services/api";

import "./styles.css";

function AddGame({ history }) {
  const [title, setTitle] = useState();

  async function HandleSubmit(e) {
    e.preventDefault();

    const GM = localStorage.getItem("user");
    const response = await api.post("gm-games", {
      GM,
      title
    });

    if (!(response.data === "")) {
      localStorage.setItem("game", title);
      localStorage.setItem("GM", GM);
      history.push("/gm-panel");
    } else {
      alert("Já existe um jogo com esse nome.");
    }
  }
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div className="row justify-content-md-center newGame-box">
          <div className="col-sm-auto">
            <label className="newGame-label" htmlFor="name">
              Nome
            </label>

            <div className="w-100"></div>

            <input className="newGame-input" onChange={e => setTitle(e.target.value)}></input>

            <div className="w-100"></div>

            <div className="col-sm">
              <button className="dashboard-button std-button">Criar</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddGame;
