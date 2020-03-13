import React, { useState } from "react";
import InitialButtons from "../../components/Login/InitialButtons";
import SignInForm from "../../components/Login/SignInForm";
import SignUpForm from "../../components/Login/SignUpForm";
import TextBox from "../../components/Login/TextBox";

import "./styles.css";

function Login({ history }) {
  const [initialButtonsDisplay, setInitialButtonsDisplay] = useState(true);
  const [signInFormDisplay, setSignInFormDisplay] = useState(false);
  const [signUpFormDisplay, setSignUpFormDisplay] = useState(false);
  const states = {
    initialButtonsDisplay,
    setInitialButtonsDisplay,
    signInFormDisplay,
    setSignInFormDisplay,
    signUpFormDisplay,
    setSignUpFormDisplay,
    history
  };

  return (
    <>
      <h1 className="game-title">ESSENCIA</h1>
      <TextBox />
      <InitialButtons {...states} />
      {/* sign in form */}
      {signInFormDisplay && <SignInForm {...states} />}
      {/* sign up form */}
      {signUpFormDisplay && <SignUpForm {...states} />}
    </>
  );
}

export default Login;
