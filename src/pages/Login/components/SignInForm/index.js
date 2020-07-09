import React, { useState } from "react";
import { useAuth } from "../../../../contexts/auth";

import returnLogin from "../../../../assets/arrows/returnLogin.png";

function SignInForm({ display, content, history }) {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  async function HandleSignIn(e) {
    e.preventDefault();

    const success = await signIn(
      nickName,
      password,
      content.userNotFound,
      content.incorrectPassword
    );

    if (success) {
      history.push("/dashboard");
    }
  }

  return (
    <>
      <form onSubmit={HandleSignIn}>
        <label>{content.label.nickName}</label>
        <input onChange={(e) => setNickName(e.target.value)}></input>

        <img src={returnLogin} alt="Return" onClick={() => display("buttons")} />

        <label>{content.label.password}</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}></input>

        <button className="std-button">{content.button.signIn}</button>
      </form>
    </>
  );
}

export default SignInForm;
