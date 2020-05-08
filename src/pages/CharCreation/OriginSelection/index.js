import React, { useState } from "react";
// import { originSelection } from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import InfoBoxLong from "../../../components/InfoBoxLong";

//import "./styles.css";

function MyFunction({ history }) {
  const [selected, setSelected] = useState("");

  function ReturnPlayerList() {
    history.push("/char-creation-0");
  }

  async function NextClick() {
    const user = localStorage.getItem("user");
    const title = localStorage.getItem("game");
    const GM = localStorage.getItem("GM");

    // await api.put("char-creation", {
    //   user,
    //   title,
    //   GM,
    //   race: races[selected].name,
    // });
  }

  return (
    <>
      <div className="raceSelection-container">
        <NaviBar history={history} />
        <CharCreationBar
          ready={selected}
          previous={ReturnPlayerList}
          next={NextClick}
          history={history}
        />
      </div>
    </>
  );
}

export default MyFunction;
