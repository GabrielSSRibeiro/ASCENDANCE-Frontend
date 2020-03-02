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
      <h1>ESSENCIA</h1>
      <TextBox />
      <InitialButtons
        Functions={{ SignInButtonClick, SignUpButtonClick }}
        States={{ initialButtons, setInitialButtons }}
      />
      {/* forms */}
      {signInForm ? <SignInForm Functions={SignInButtonClick} Route={history} /> : ""}
      {signUpForm ? <SignUpForm Functions={SignUpButtonClick} Route={history} /> : ""}
    </>
  );
}

export default Login;
