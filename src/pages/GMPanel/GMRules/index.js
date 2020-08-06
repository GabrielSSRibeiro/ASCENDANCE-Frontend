import React from "react";
import NaviBar from "~molecules/NaviBar";
import ReturnMenu from "~molecules/ReturnMenu";

import "./styles.css";

function MyFunction({ history }) {
  function ReturnGMPanel() {
    history.push("/gm-panel");
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnGMPanel} title="returnMenu" />
      <h1>Em desenvolvimento</h1>
    </>
  );
}

export default MyFunction;
