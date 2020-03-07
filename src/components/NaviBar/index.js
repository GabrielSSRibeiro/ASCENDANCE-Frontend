import React from "react";

import "./styles.css";

function NaviBar({ Route, States }) {
  function RedirectLogin(e) {
    e.preventDefault();
    Route.push("/");
  }
  function RedirectDashboard(e) {
    e.preventDefault();
    Route.push("/dashboard");
  }

  return (
    <div className="navi-bar row">
      <button className="col-sl-auto mr-auto title" onClick={RedirectDashboard}>
        ESSENCIA
      </button>
      <button className="col-sl-auto user" onClick={RedirectLogin}>
        {States}
      </button>
    </div>
  );
}

export default NaviBar;
