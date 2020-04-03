import React, { useState } from "react";
import content from "../../utils/content";

import TextBox from "./components/TextBox";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

import "./styles.css";

function Login({ history }) {
  const [display, setDisplay] = useState("buttons");

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

        {display === "signIn" && <SignInForm display={setDisplay} history={history} />}

        {display === "signUp" && <SignUpForm display={setDisplay} history={history} />}
      </main>
    </div>
  );
}

export default Login;
