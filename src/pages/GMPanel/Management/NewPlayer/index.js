import React from "react";
import NaviBar from "../../../../components/NaviBar";
import ReturnMenu from "../../../../components/ReturnMenu";
import AddPlayer from "./components/AddPlayer";

import "./styles.css";

function NewPlayer({ history }) {
  function ReturnManagement() {
    history.push("/gm-management");
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnManagement} title="Adicionar Jogador" />
      <AddPlayer history={history} />
    </>
  );
}
export default NewPlayer;
