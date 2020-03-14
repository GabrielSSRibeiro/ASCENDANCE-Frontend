import React from "react";
import AccAuth from "./components/AccAuth";
import TextBox from "./components/TextBox";

import "./styles.css";

function Login({ history }) {
  return (
    <>
      <h1 className="game-title">ESSENCIA</h1>
      <TextBox />
      <AccAuth history={history} />
    </>
  );
}

export default Login;
