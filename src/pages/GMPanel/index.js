import React from "react";
import NaviBar from "../../components/NaviBar";
import MembersBar from "../../components/MembersBar";
import GMMenu from "./components/GMMenu";

import { useLanguage } from "../../contexts/language";
import "./styles.css";

function GMPanel({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);

  return (
    <div className="GMPanel-container">
      <NaviBar history={history} />
      <GMMenu content={content} history={history} />
      <main>
        <section></section>
        <footer>
          <MembersBar history={history} />
        </footer>
      </main>
    </div>
  );
}

export default GMPanel;
