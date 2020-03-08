import React from "react";

import "./styles.css";

function NaviBar({ userName, history }) {
  function QueryLogin() {
    const nickName = localStorage.getItem("user");
    if (nickName === "" || !nickName) {
      history.push("/");
    }
  }

  function RedirectLogin() {
    localStorage.setItem("user", "");
    localStorage.setItem("game", "");
    history.push("/");
  }
  function RedirectDashboard() {
    history.push("/dashboard");
  }

  QueryLogin();

  return (
    <div className="navi-bar row">
      <button className="col-sl-auto mr-auto title" onClick={RedirectDashboard}>
        ESSENCIA
      </button>
      <button className="col-sl-auto user" onClick={RedirectLogin}>
        {userName}
      </button>
    </div>
  );
}

export default NaviBar;
