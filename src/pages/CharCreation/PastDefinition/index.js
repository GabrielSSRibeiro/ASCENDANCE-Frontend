import React, { useState } from "react";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import CharCreationOutline from "../../../components/CharCreationOutline";
import InfoBoxLong from "../../../components/InfoBoxLong";

import { useLanguage } from "../../../contexts/language";
import "./styles.css";

function PastDefinition({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [past, setPast] = useState(JSON.parse(localStorage.getItem("character")).past);

  async function NextClick(title, GM, level) {
    return await api.put("char-creation", {
      title,
      GM,
      past,
      level,
    });
  }

  return (
    <div className="pastDefinition-container">
      <NaviBar history={history} />
      <CharCreationBar ready={past ? true : false} next={NextClick} history={history} />

      <main>
        <CharCreationOutline content={content} />
        <span>{content.title}</span>

        <textarea
          placeholder={content.placeholder}
          onChange={(e) => setPast(e.target.value)}
          value={past}
        ></textarea>
      </main>

      <InfoBoxLong
        content={[
          {
            title: content.infoBoxLong.title,
            texts: content.infoBoxLong.texts,
          },
        ]}
      />
    </div>
  );
}

export default PastDefinition;
