import React, { useState, useEffect } from "react";

import "./styles.css";

function NaviBar({ history }) {
  const [userName, setUserName] = useState();

  useEffect(() => {
    async function getUser() {
      const nickName = localStorage.getItem("user");
      setUserName(nickName);
    }

    getUser();
  }, []);

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
    localStorage.setItem("game", "");
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
