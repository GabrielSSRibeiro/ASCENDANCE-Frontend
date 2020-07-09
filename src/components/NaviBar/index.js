import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
// import { useLanguage } from "../../contexts/language";

import { useLanguage } from "../../contexts/language";
import "./styles.css";

function NaviBar({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [userName, setUserName] = useState();
  // const [language, setLanguage] = useState();

  const { signOut } = useAuth();
  // const { HandleLanguage } = useLanguage();

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
      <button onClick={RedirectDashboard}>{content}</button>
      <button onClick={RedirectLogin}>{userName}</button>
    </div>
  );
}

export default NaviBar;
