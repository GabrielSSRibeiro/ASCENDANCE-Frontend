import React from "react";
import { useAuth } from "../../contexts/auth";
// import { useLanguage } from "../../contexts/language";

import { useLanguage } from "../../contexts/language";
import "./styles.css";

function NaviBar({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  // const [language, setLanguage] = useState();

  const { signOut } = useAuth();
  // const { HandleLanguage } = useLanguage();

  function RedirectLogin() {
    signOut();
  }

  function RedirectDashboard() {
    history.push("/dashboard");
  }

  return (
    <div className="naviBar-container">
      <button onClick={RedirectDashboard}>{content}</button>
      <button onClick={RedirectLogin}>{localStorage.getItem("user")}</button>
    </div>
  );
}

export default NaviBar;
