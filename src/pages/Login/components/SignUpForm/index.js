import React, { useState } from "react";
import { useAuth } from "../../../../contexts/auth";
import { login } from "../../../../utils/content";

import returnLogin from "../../../../assets/arrows/returnLogin.png";

function SignUpForm({ display, history }) {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useAuth();

  async function HandleSignUp(e) {
    e.preventDefault();

    const success = await signUp(nickName, email, password, login.userAlreadyExists);

    if (success) {
      history.push("/dashboard");
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
