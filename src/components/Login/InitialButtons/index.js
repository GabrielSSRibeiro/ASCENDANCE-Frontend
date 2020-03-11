import React from "react";

function InitialButtons(props) {
  function SignInButtonClick() {
    props.setInitialButtonsDisplay(!props.initialButtonsDisplay);
    props.setSignInFormDisplay(!props.signInFormDisplay);
  }

  function SignUpButtonClick() {
    props.setInitialButtonsDisplay(!props.initialButtonsDisplay);
    props.setSignUpFormDisplay(!props.signUpFormDisplay);
  }

  return (
    <>
      {props.initialButtonsDisplay ? (
        <>
          <div className="row">
            <div className="col-sm">
              <button className="std-button-filled" onClick={SignInButtonClick}>
                Sign In
              </button>
            </div>

            <div className="w-100"></div>

            <div className="col-sm">
              <button className="std-button" onClick={SignUpButtonClick}>
                Sign Up
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default InitialButtons;
