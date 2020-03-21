import React, { useState } from "react";
import api from "../../../../services/api";
import { socket } from "../../../../services/socket";

import "./styles.css";
import returnLogin from "../../../../assets/arrows/returnLogin.png";

function SignUpForm(props) {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function ReturnAccAuth() {
    props.setAccAuthDisplay(true);
    props.setSignUpFormDisplay(false);
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    const response = await api.post("users", {
      nickName,
      email,
      password
    });

    if (!(response.data === "")) {
      const { nickName } = response.data;
      localStorage.setItem("user", nickName);
      localStorage.setItem("password", password);

      //update socket connection
      socket.emit("login", nickName);

      props.history.push("/dashboard");
    } else {
      alert("Nome de usuário já existe.");
    }
  }

  return (
    <form onSubmit={HandleSubmit}>
      <div className="row justify-content-md-center">
        <div className="col-sm-auto signUpForm">
          <label htmlFor="nickName" className="login-label">
            Usuário
          </label>
          <div className="w-100"></div>
          <input className="login-input" onChange={e => setNickName(e.target.value)}></input>
        </div>

        <div className="w-100"></div>

        <div className="col-sm-auto signUpForm">
          <img
            className="signUpForm-btn-back"
            src={returnLogin}
            alt="Return"
            onClick={ReturnAccAuth}
          />
          <label htmlFor="email" className="login-label">
            E-mail
          </label>
          <div className="w-100"></div>
          <input className="login-input" onChange={e => setEmail(e.target.value)}></input>
        </div>

        <div className="w-100"></div>

        <div className="col-sm-auto signUpForm">
          <label htmlFor="password" className="login-label">
            Senha
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
          <button className="signUpForm-btn std-button">Cadastrar</button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
