import React, { useState } from "react";
import api from "../../../../services/api";
import content from "../../../../utils/content";

import NaviBar from "../../../../components/NaviBar";
import ReturnMenu from "../../../../components/ReturnMenu";
import FormField from "../../../../components/FormField";

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
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnGMGamesList} title="Escolha de Nome" />
      <form onSubmit={HandleSubmit}>
        <div className="row justify-content-md-center newGame-box">
          <div className="col-sm-auto">
            <FormField label={content.newGame.label} onChange={setTitle} />

            <div className="w-100"></div>

            <div className="col-sm">
              <button className="dashboard-button std-button">{content.newGame.button}</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default NewGame;
