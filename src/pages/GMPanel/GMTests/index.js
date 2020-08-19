import React from "react";
import NaviBar from "~/components/organisms/NaviBar";
import ReturnMenu from "~/components/organisms/ReturnMenu";

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
