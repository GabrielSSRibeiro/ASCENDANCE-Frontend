import React from "react";
import content from "../../utils/content";
import AccAuth from "./components/AccAuth";
import TextBox from "./components/TextBox";

import "./styles.css";

function Login({ history }) {
  return (
    <>
      <h1 className="game-title">{content.login.title}</h1>
      <TextBox />
      <AccAuth history={history} />
    </>
  );
}

export default Login;
