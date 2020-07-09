import React, { useState } from "react";
import { useAuth } from "../../../../contexts/auth";

import returnLogin from "../../../../assets/arrows/returnLogin.png";

function SignUpForm({ display, content, history }) {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useAuth();

  async function HandleSignUp(e) {
    e.preventDefault();

    const success = await signUp(nickName, email, password, content.userAlreadyExists);

    if (success) {
      history.push("/dashboard");
    }
  }

  return (
    <>
      <form onSubmit={HandleSignUp}>
        <label>{content.label.nickName}</label>
        <input onChange={(e) => setNickName(e.target.value)}></input>

        <img src={returnLogin} alt="Return" onClick={() => display("buttons")} />

        <label>{content.label.email}</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>

        <label>{content.label.password}</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}></input>

        <button className="std-button">{content.button.signUp}</button>
      </form>
    </>
  );
}

export default SignUpForm;
