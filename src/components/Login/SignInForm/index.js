import React, { useState } from "react";
import api from "../../../services/api";

import "./styles.css";
import returnLogin from "../../../assets/arrows/returnLogin.png";

function SignInForm({ SignInButtonClick, history }) {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");

  async function HandleSubmit(e) {
    e.preventDefault();

    const response = await api.get("users", { params: { nickName } });
    if (response.data) {
      if (password === response.data.password) {
        const { nickName } = response.data;
        localStorage.setItem("user", nickName);
        history.push("/dashboard");
      } else {
        alert("Senha incorreta.");
      }
    } else {
      alert("Usuário não encontrado.");
    }
  }

  return (
    <form onSubmit={HandleSubmit}>
      <div className="row justify-content-md-center">
        <div className="col-sm-auto">
          <label htmlFor="login">Usuário</label>
          <div className="w-100"></div>
          <input onChange={e => setNickName(e.target.value)}></input>
        </div>

        <div className="w-100"></div>

        <div className="col-sm-auto">
          <img className="btn-back" src={returnLogin} alt="Return" onClick={SignInButtonClick} />
          <label htmlFor="paswword">Senha</label>
          <div className="w-100"></div>
          <input onChange={e => setPassword(e.target.value)}></input>
        </div>

        <div className="w-100"></div>

        <div className="col-sm">
          <button className="std-button">Entrar</button>
        </div>
      </div>
    </form>
  );
}
export default SignInForm;
