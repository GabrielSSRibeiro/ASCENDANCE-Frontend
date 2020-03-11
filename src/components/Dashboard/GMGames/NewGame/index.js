import React, { useState } from "react";
import api from "../../../../services/api";

import "./styles.css";

function NewGame(props) {
  const [name, setName] = useState();

  async function HandleSubmit(e) {
    e.preventDefault();

    const user = localStorage.getItem("user");
    const response = await api.post("gm-games", {
      user,
      name
    });

    if (!(response.data === "")) {
      localStorage.setItem("game", name);
      props.history.push("/gm-panel");
    } else {
      alert("Já existe um jogo com esse nome.");
    }
  }

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div className="row justify-content-md-center form-box">
          <div className="col-sm-auto">
            <label htmlFor="name">Nome</label>

            <div className="w-100"></div>

            <input onChange={e => setName(e.target.value)}></input>

            <div className="w-100"></div>

            <div className="col-sm">
              <button className="std-button">Criar</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default NewGame;
