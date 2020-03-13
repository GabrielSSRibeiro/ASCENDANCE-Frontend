import React, { useState } from "react";
import api from "../../../../services/api";
import NaviBar from "../../../../components/NaviBar";
import ReturnMenu from "../../../../components/ReturnMenu";

import "./styles.css";

function NewGame({ history }) {
  const [name, setName] = useState();

  function ReturnGMGamesList() {
    history.push("/dashboard-gm-list");
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    const user = localStorage.getItem("user");
    const response = await api.post("gm-games", {
      user,
      name
    });

    if (!(response.data === "")) {
      localStorage.setItem("game", name);
      history.push("/gm-panel");
    } else {
      alert("Já existe um jogo com esse nome.");
    }
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnGMGamesList} title="Escolha de Nome" />
      <form onSubmit={HandleSubmit}>
        <div className="row justify-content-md-center newGame-box">
          <div className="col-sm-auto">
            <label className="newGame-label" htmlFor="name">
              Nome
            </label>

            <div className="w-100"></div>

            <input className="newGame-input" onChange={e => setName(e.target.value)}></input>

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
export default NewGame;
