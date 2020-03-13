import React, { useState } from "react";
import api from "../../../../services/api";
import NaviBar from "../../../../components/NaviBar";
import ReturnMenu from "../../../../components/ReturnMenu";

import "./styles.css";

function AddPlayer({ history }) {
  const [playerUser, setPlayerUser] = useState();

  function ReturnManagement() {
    history.push("/gm-management");
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    const user = localStorage.getItem("user");
    const name = localStorage.getItem("game");
    const response = await api.put("gm-management", {
      user,
      name,
      playerUser
    });

    if (!(response.data === "")) {
      localStorage.setItem("game", name);
      history.push("/gm-management");
    } else {
      alert("Usuário não encontrado.");
    }
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnManagement} title="Adicionar Jogador" />
      <form onSubmit={HandleSubmit}>
        <div className="row justify-content-md-center addPlayer-box">
          <div className="col-sm-auto">
            <label className="addPlayer-label" htmlFor="name">
              Nome
            </label>

            <div className="w-100"></div>

            <input
              className="addPlayer-input"
              onChange={e => setPlayerUser(e.target.value)}
            ></input>

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
export default AddPlayer;
