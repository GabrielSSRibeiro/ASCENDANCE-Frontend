import React, { useState } from "react";
import api from "../../../../services/api";
import { login } from "../../../../utils/content";
import { socket } from "../../../../services/socket";

import returnLogin from "../../../../assets/arrows/returnLogin.png";

function SignUpForm({ display, history }) {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function HandleSignUp(e) {
    e.preventDefault();

    const response = await api.post("users", {
      nickName,
      email,
      password,
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

  return (
    <>
      <form onSubmit={HandleSignUp}>
        <label>{login.label.nickName}</label>
        <input onChange={(e) => setNickName(e.target.value)}></input>

        <img src={returnLogin} alt="Return" onClick={() => display("buttons")} />

        <label>{login.label.email}</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>

        <label>{login.label.password}</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}></input>

        <button className="std-button">{login.button.signUp}</button>
      </form>
    </>
  );
}

export default SignUpForm;
