import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import Menu from "../../../components/GMPanel/Menu";

import "./styles.css";

function GMPanel({ history }) {
  const gameName = localStorage.getItem("game");

  return (
    <>
      <Menu history={history} />;
    </>
  );
}

export default GMPanel;
