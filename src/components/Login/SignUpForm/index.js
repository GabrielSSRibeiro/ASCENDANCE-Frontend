import React, { useState } from "react";
import api from "../../../services/api";

import "./styles.css";
import returnLogin from "../../../assets/arrows/returnLogin.png";

function SignUpForm({ SignUpButtonClick, history }) {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      history.push("/dashboard");
    } else {
      alert("Nome de usuário já existe.");
    }
  }

  return (
    <form onSubmit={HandleSubmit}>
      <div className="row justify-content-md-center">
        <div className="col-sm-auto">
          <label htmlFor="nickName">Usuário</label>
          <div className="w-100"></div>
          <input onChange={e => setNickName(e.target.value)}></input>
        </div>

        <div className="w-100"></div>

        <div className="col-sm-auto">
          <img className="btn-back" src={returnLogin} alt="Return" onClick={SignUpButtonClick} />
          <label htmlFor="email">E-mail</label>
          <div className="w-100"></div>
          <input onChange={e => setEmail(e.target.value)}></input>
        </div>

        <div className="w-100"></div>

        <div className="col-sm-auto">
          <label htmlFor="password">Senha</label>
          <div className="w-100"></div>
          <input onChange={e => setPassword(e.target.value)}></input>
        </div>

        <div className="w-100"></div>

        <div className="col-sm">
          <button className="std-button">Cadastrar</button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
