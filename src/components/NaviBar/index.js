import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { naviBar } from "../../utils/content";

import "./styles.css";

function NaviBar({ history }) {
  const [userName, setUserName] = useState();

  useEffect(() => {
    async function userCheck() {
      const nickName = localStorage.getItem("user");
      const password = localStorage.getItem("password");

      if (nickName && password) {
        const response = await api.get("users", { params: { nickName, password } });
        if (response.data === nickName) {
          setUserName(nickName);
        } else {
          history.push("/");
        }
      } else {
        history.push("/");
      }
    }

    userCheck();
  }, [history]);

  function RedirectLogin() {
    localStorage.clear();
    history.push("/");
  }
  function RedirectDashboard() {
    localStorage.removeItem("game");
    localStorage.removeItem("GM");
    history.push("/dashboard");
  }

  return (
    <div className="naviBar-container">
      <button onClick={RedirectDashboard}>{naviBar}</button>
      <button onClick={RedirectLogin}>{userName}</button>
    </div>
  );
}

export default NaviBar;
