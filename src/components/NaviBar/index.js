import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";

import { naviBar } from "../../utils/content";

import "./styles.css";

function NaviBar({ history }) {
  const [userName, setUserName] = useState();

  const { signOut } = useAuth();

  useEffect(() => {
    async function userCheck() {
      const nickName = localStorage.getItem("user");
      const password = localStorage.getItem("password");

      const response = await api.get("users", { params: { nickName, password } });
      if (response.data === nickName) {
        setUserName(nickName);
      } else {
        history.push("/");
      }
    }

    userCheck();
  }, [history]);

  function RedirectLogin() {
    signOut();
    history.push("/");
  }
  function RedirectDashboard() {
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
