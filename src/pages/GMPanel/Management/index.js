import React from "react";
import content from "../../../utils/content";
import NaviBar from "../../../components/NaviBar";
import ReturnMenu from "../../../components/ReturnMenu";
import ManageParty from "./components/ManageParty";

import "./styles.css";

function Management({ history }) {
  function ReturnGMPanel() {
    history.push("/gm-panel");
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnGMPanel} title={content.management.returnMenu} />
      <ManageParty history={history} />}
    </>
  );
}

export default Management;
