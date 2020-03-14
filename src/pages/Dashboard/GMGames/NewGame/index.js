import React from "react";
import NaviBar from "../../../../components/NaviBar";
import ReturnMenu from "../../../../components/ReturnMenu";
import AddGame from "./components/AddGame";

import "./styles.css";

function NewGame({ history }) {
  function ReturnGMGamesList() {
    history.push("/dashboard-gm-list");
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnGMGamesList} title="Escolha de Nome" />
      <AddGame history={history} />
    </>
  );
}
export default NewGame;
