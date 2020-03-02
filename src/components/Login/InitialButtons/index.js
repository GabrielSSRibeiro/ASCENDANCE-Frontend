import React from "react";

function InitialButtons({ Functions, States }) {
  return (
    <>
      {States.initialButtons ? (
        <>
          <div className="row">
            <div className="col-sm">
              <button className="std-button-filled" onClick={Functions.SignInButtonClick}>
                Sign In
              </button>
            </div>

            <div className="w-100"></div>

            <div className="col-sm">
              <button className="std-button" onClick={Functions.SignUpButtonClick}>
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
