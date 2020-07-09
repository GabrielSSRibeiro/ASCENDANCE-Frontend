import React, { useState } from "react";

import TextBox from "./components/TextBox";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

import { useLanguage } from "../../contexts/language";
import "./styles.css";

function Login({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [display, setDisplay] = useState("buttons");

  return (
    <div className="login-container">
      <h1 className="game-title">{content.title}</h1>
      <span>{content.version}</span>

      <main>
        <aside>
          <TextBox content={content.textBox} />
        </aside>
        {display === "buttons" && (
          <section>
            <button className="std-button-filled" onClick={() => setDisplay("signIn")}>
              {content.button.signIn}
            </button>

            <button className="std-button" onClick={() => setDisplay("signUp")}>
              {content.button.signUp}
            </button>
          </section>
        )}

        {display === "signIn" && (
          <SignInForm display={setDisplay} content={content} history={history} />
        )}

        {display === "signUp" && (
          <SignUpForm display={setDisplay} content={content} history={history} />
        )}
      </main>
    </div>
  );
}

export default Login;
