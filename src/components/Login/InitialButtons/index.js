import React from "react";

function InitialButtons({ SignInButtonClick, SignUpButtonClick, initialButtons }) {
  return (
    <>
      {initialButtons ? (
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
