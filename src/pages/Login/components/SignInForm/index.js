import React, { useState } from "react";
import content from "../../../../utils/content";
import api from "../../../../services/api";
import { socket } from "../../../../services/socket";

import "./styles.css";
import returnLogin from "../../../../assets/arrows/returnLogin.png";

function SignInForm(props) {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");

  function ReturnAccAuth() {
    props.setAccAuthDisplay(true);
    props.setSignInFormDisplay(false);
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    const response = await api.get("users", { params: { nickName, password } });

    if (response.data) {
      if (response.data === "incorrect") {
        alert("Senha incorreta.");
      } else {
        localStorage.setItem("user", nickName);
        localStorage.setItem("password", password);

        //update socket connection
        socket.emit("login", nickName);

        props.history.push("/dashboard");
      }
    } else {
      alert("Usuário não encontrado.");
    }
  }

  return (
    <form onSubmit={HandleSubmit}>
      <div className="row justify-content-md-center ">
        <div className="col-sm-auto signInForm">
          <label htmlFor="login" className="login-label">
            {content.login.label.user}
          </label>
          <div className="w-100"></div>
          <input className="login-input" onChange={e => setNickName(e.target.value)}></input>
        </div>

        <div className="w-100"></div>

        <div className="col-sm-auto signInForm">
          <img
            className="signInForm-btn-back"
            src={returnLogin}
            alt="Return"
            onClick={ReturnAccAuth}
          />
          <label htmlFor="password" className="login-label">
            {content.login.label.password}
          </label>
          <div className="w-100"></div>
          <input
            className="login-input"
            type="password"
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>

        <div className="w-100"></div>

        <div className="col-sm">
          <button className="signInForm-btn std-button">Entrar</button>
        </div>
      </div>
    </form>
  );
}
export default SignInForm;
