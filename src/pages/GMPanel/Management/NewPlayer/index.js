import React, { useState } from "react";
import api from "../../../../services/api";
import content from "../../../../utils/content";

import NaviBar from "../../../../components/NaviBar";
import ReturnMenu from "../../../../components/ReturnMenu";
import FormField from "../../../../components/FormField";

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
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnManagement} title={content.newPlayer.returnMenu} />
      <form onSubmit={HandleSubmit}>
        <div className="row justify-content-md-center addPlayer-box">
          <div className="col-sm-auto">
            <FormField label={content.newPlayer.label} onChange={setPlayerUser} />

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
export default NewPlayer;
