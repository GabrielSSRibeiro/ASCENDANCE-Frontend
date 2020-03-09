import React, { useState } from "react";
import InitialButtons from "../../components/Login/InitialButtons";
import SignInForm from "../../components/Login/SignInForm";
import SignUpForm from "../../components/Login/SignUpForm";
import TextBox from "../../components/Login/TextBox";

import "./styles.css";

function Login({ history }) {
  const [initialButtons, setInitialButtons] = useState(true);
  const [signInForm, setSignInForm] = useState(false);
  const [signUpForm, setSignUpForm] = useState(false);

  function SignInButtonClick() {
    setInitialButtons(!initialButtons);
    setSignInForm(!signInForm);
  }

  function SignUpButtonClick() {
    setInitialButtons(!initialButtons);
    setSignUpForm(!signUpForm);
  }

  return (
    <>
      <h1 className="game-title">ESSENCIA</h1>
      <TextBox />
      <InitialButtons
        SignInButtonClick={SignInButtonClick}
        SignUpButtonClick={SignUpButtonClick}
        initialButtons={initialButtons}
      />
      {/* forms */}
      {signInForm ? <SignInForm SignInButtonClick={SignInButtonClick} history={history} /> : ""}
      {signUpForm ? <SignUpForm SignUpButtonClick={SignUpButtonClick} history={history} /> : ""}
    </>
  );
}

export default Login;
