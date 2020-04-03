import React, { useState } from "react";
import content from "../../utils/content";
import api from "../../services/api";
import { socket } from "../../services/socket";

import TextBox from "./components/TextBox";

import "./styles.css";
import returnLogin from "../../assets/arrows/returnLogin.png";

function Login({ history }) {
  const [display, setDisplay] = useState("buttons");

  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function HandleSignUp(e) {
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

      history.push("/dashboard");
    } else {
      alert("Nome de usuário já existe.");
    }
  }

  async function HandleSignIn(e) {
    e.preventDefault();

    const response = await api.get("users", {
      params: { nickName, password }
    });

    if (response.data) {
      if (response.data === "incorrect") {
        alert("Senha incorreta.");
      } else {
        localStorage.setItem("user", nickName);
        localStorage.setItem("password", password);

        //update socket connection
        socket.emit("login", nickName);

        history.push("/dashboard");
      }
    } else {
      alert("Usuário não encontrado.");
    }
  }

  return (
    <div className="login-container">
      <h1 className="game-title">{content.login.title}</h1>

      <main>
        <TextBox content={content.login.textBox} />
        {display === "buttons" && (
          <section>
            <button className="std-button-filled" onClick={() => setDisplay("signIn")}>
              {content.login.button.signIn}
            </button>

            <button className="std-button" onClick={() => setDisplay("signUp")}>
              {content.login.button.signUp}
            </button>
          </section>
        )}

        {display === "signIn" && (
          <form onSubmit={HandleSignIn}>
            <label>{content.login.label.nickName}</label>
            <input onChange={e => setNickName(e.target.value)}></input>

            <img src={returnLogin} alt="Return" onClick={() => setDisplay("buttons")} />

            <label>{content.login.label.password}</label>
            <input type="password" onChange={e => setPassword(e.target.value)}></input>

            <button className="std-button">{content.login.button.signIn}</button>
          </form>
        )}

        {display === "signUp" && (
          <form onSubmit={HandleSignUp}>
            <label>{content.login.label.nickName}</label>
            <input onChange={e => setNickName(e.target.value)}></input>

            <img src={returnLogin} alt="Return" onClick={() => setDisplay("buttons")} />

            <label>{content.login.label.email}</label>
            <input type="email" onChange={e => setEmail(e.target.value)}></input>

            <label>{content.login.label.password}</label>
            <input type="password" onChange={e => setPassword(e.target.value)}></input>

            <button className="std-button">{content.login.button.signUp}</button>
          </form>
        )}
      </main>
    </div>
  );
}

export default Login;
