import React from "react";
import NaviBar from "../../components/NaviBar";
import MembersBar from "../../components/MembersBar";
import GMMenu from "./components/GMMenu";

import "./styles.css";

function GMPanel({ history }) {
  return (
    <div className="GMPanel-container">
      <NaviBar history={history} />
      <GMMenu history={history} />
      <MembersBar />
    </div>
  );
}

export default GMPanel;
