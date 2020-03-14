import React from "react";
import NaviBar from "../../components/NaviBar";
import Menu from "./components/Menu";

import "./styles.css";

function GMPanel({ history }) {
  return (
    <>
      <NaviBar history={history} />
      <Menu history={history} />;
    </>
  );
}

export default GMPanel;
