import React from "react";
import NaviBar from "../../../components/NaviBar";
import ReturnMenu from "../../../components/ReturnMenu";

import "./styles.css";

function MyFunction({ history }) {
  function ReturnPlayerPanel() {
    history.push("/player-panel");
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnPlayerPanel} title="returnMenu" />
      <h1>Em desenvolvimento</h1>
    </>
  );
}

export default MyFunction;
