import React, { useState } from "react";
import api from "../../../../services/api";
import { login } from "../../../../utils/content";
import { socket } from "../../../../services/socket";

import returnLogin from "../../../../assets/arrows/returnLogin.png";

function SignInForm({ display, history }) {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");

  async function HandleSignIn(e) {
    e.preventDefault();

    const response = await api.get("users", {
      params: { nickName, password },
    });
    console.log(response.data);

    if (response.data) {
      if (response.data === "incorrect") {
        alert(login.incorrect);
      } else {
        localStorage.setItem("user", nickName);
        localStorage.setItem("password", password);

        //update socket connection
        socket.emit("login", nickName);

        history.push("/dashboard");
      }
    } else {
      alert(login.notFound);
    }
  }

  return (
    <>
      <form onSubmit={HandleSignIn}>
        <label>{login.label.nickName}</label>
        <input onChange={(e) => setNickName(e.target.value)}></input>

        <img src={returnLogin} alt="Return" onClick={() => display("buttons")} />

        <label>{login.label.password}</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}></input>

        <button className="std-button">{login.button.signIn}</button>
      </form>
    </>
  );
}

export default SignInForm;
