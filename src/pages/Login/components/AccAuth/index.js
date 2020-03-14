import React, { useState } from "react";
import SignInForm from "../SignInForm";
import SignUpForm from "../SignUpForm";

import "./styles.css";

function AccAuth({ history }) {
  const [accAuthDisplay, setAccAuthDisplay] = useState(true);
  const [signInFormDisplay, setSignInFormDisplay] = useState(false);
  const [signUpFormDisplay, setSignUpFormDisplay] = useState(false);

  function SignInButtonClick() {
    setAccAuthDisplay(!accAuthDisplay);
    setSignInFormDisplay(!signInFormDisplay);
  }

  function SignUpButtonClick() {
    setAccAuthDisplay(!accAuthDisplay);
    setSignUpFormDisplay(!signUpFormDisplay);
  }

  return (
    <>
      <div className="row" style={{ display: accAuthDisplay ? "" : "none" }}>
        <div className="col-sm">
          <button className="accAuth-button std-button-filled" onClick={SignInButtonClick}>
            Sign In
          </button>
        </div>

        <div className="w-100"></div>

        <div className="col-sm">
          <button className="accAuth-button std-button" onClick={SignUpButtonClick}>
            Sign Up
          </button>
        </div>
      </div>

      {/* sign in form */}
      {signInFormDisplay && (
        <SignInForm
          setAccAuthDisplay={setAccAuthDisplay}
          setSignInFormDisplay={setSignInFormDisplay}
          history={history}
        />
      )}

      {/* sign up form */}
      {signUpFormDisplay && (
        <SignUpForm
          setAccAuthDisplay={setAccAuthDisplay}
          setSignUpFormDisplay={setSignUpFormDisplay}
          history={history}
        />
      )}
    </>
  );
}

export default AccAuth;
