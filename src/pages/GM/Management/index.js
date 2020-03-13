import React, { useState, useEffect } from "react";
import NaviBar from "../../../components/NaviBar";
import ReturnMenu from "../../../components/ReturnMenu";
import ManageParty from "../../../components/GMPanel/Management/ManageParty";

import "./styles.css";

function Management({ history }) {
  function ReturnGMPanel() {
    history.push("/gm-panel");
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnGMPanel} title="Gerenciamento" />
      <ManageParty history={history} />}
    </>
  );
}

export default Management;
