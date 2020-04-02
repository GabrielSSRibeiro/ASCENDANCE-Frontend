import React, { useState } from "react";
import content from "../../utils/content";
import api from "../../services/api";
import { socket } from "../../services/socket";

import TextBox from "./components/TextBox";
import FormField from "../../components/FormField";

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
    <>
      <h1 className="game-title">{content.login.title}</h1>
      <TextBox content={content.login.textBox} />

      {display === "buttons" && (
        <div className="row">
          <div className="col-sm">
            <button className="login-btn std-button-filled" onClick={() => setDisplay("signIn")}>
              {content.login.button.signIn}
            </button>
          </div>

          <div className="w-100"></div>

          <div className="col-sm">
            <button className="login-btn std-button" onClick={() => setDisplay("signUp")}>
              {content.login.button.signUp}
            </button>
          </div>
        </div>
      )}
      {display === "signIn" && (
        <form onSubmit={HandleSignIn}>
          <div className="row justify-content-md-center ">
            <div className="col-sm-auto form-field-alignment-l">
              <FormField label={content.login.label.nickName} onChange={setNickName} />
            </div>

            <div className="w-100"></div>

            <div className="col-sm-auto form-field-alignment-l">
              <img
                className="login-form-btn-back"
                src={returnLogin}
                alt="Return"
                onClick={() => setDisplay("buttons")}
              />
              <FormField
                label={content.login.label.password}
                onChange={setPassword}
                type="password"
              />
            </div>

            <div className="w-100"></div>

            <div className="col-sm">
              <button className="login-btn std-button">{content.login.button.signIn}</button>
            </div>
          </div>
        </form>
      )}
      {display === "signUp" && (
        <form onSubmit={HandleSignUp}>
          <div className="row justify-content-md-center ">
            <div className="col-sm-auto form-field-alignment-l">
              <FormField label={content.login.label.nickName} onChange={setNickName} />
            </div>

            <div className="w-100"></div>

            <div className="col-sm-auto form-field-alignment-l">
              <FormField label={content.login.label.email} onChange={setEmail} />
            </div>

            <div className="w-100"></div>

            <div className="col-sm-auto form-field-alignment-l">
              <img
                className="login-form-btn-back"
                src={returnLogin}
                alt="Return"
                onClick={() => setDisplay("buttons")}
              />
              <FormField
                label={content.login.label.password}
                onChange={setPassword}
                type="password"
              />
            </div>

            <div className="w-100"></div>

            <div className="col-sm">
              <button className="login-btn std-button">{content.login.button.signUp}</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default Login;
