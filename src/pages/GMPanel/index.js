import React from "react";
import NaviBar from "../../components/NaviBar";
import MembersBar from "../../components/MembersBar";
import Menu from "./components/Menu";

import "./styles.css";

function GMPanel({ history }) {
  return (
    <>
      <NaviBar history={history} />
      <Menu history={history} />
      <MembersBar />
    </>
  );
}

export default GMPanel;
