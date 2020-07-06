import React, { useState } from "react";
import { pastDefinition } from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import CharCreationOutline from "../../../components/CharCreationOutline";
import InfoBoxLong from "../../../components/InfoBoxLong";

import "./styles.css";

function PastDefinition({ history }) {
  const [past, setPast] = useState(JSON.parse(localStorage.getItem("character")).past);

  async function NextClick(user, title, GM, level) {
    return await api.put("char-creation", {
      user,
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
        <CharCreationOutline content={pastDefinition} />
        <span>{pastDefinition.title}</span>

        <textarea
          placeholder={pastDefinition.placeholder}
          onChange={(e) => setPast(e.target.value)}
          value={past}
        ></textarea>
      </main>

      <InfoBoxLong
        content={[
          {
            title: pastDefinition.infoBoxLong.title,
            texts: pastDefinition.infoBoxLong.texts,
          },
        ]}
      />
    </div>
  );
}

export default PastDefinition;
