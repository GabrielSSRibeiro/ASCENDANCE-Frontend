import React, { useState } from "react";
import { login } from "../../utils/content";

import TextBox from "./components/TextBox";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

import "./styles.css";

function Login({ history }) {
  const [display, setDisplay] = useState("buttons");

  return (
    <div className="login-container">
      <h1 className="game-title">{login.title}</h1>
      <span>{login.version}</span>

      <main>
        <aside>
          <TextBox content={login.textBox} />
        </aside>
        {display === "buttons" && (
          <section>
            <button className="std-button-filled" onClick={() => setDisplay("signIn")}>
              {login.button.signIn}
            </button>

            <button className="std-button" onClick={() => setDisplay("signUp")}>
              {login.button.signUp}
            </button>
          </section>
        )}

        {display === "signIn" && <SignInForm display={setDisplay} history={history} />}

        {display === "signUp" && <SignUpForm display={setDisplay} history={history} />}
      </main>
    </div>
  );
}

export default Login;
