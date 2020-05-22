import React, { useState } from "react";
import { profileDefinition } from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";

import "./styles.css";

function ProfileDefinition({ history }) {
  // const [selected, setSelected] = useState(JSON.parse(localStorage.getItem("character").name));
  const [selected, setSelected] = useState("");

  async function NextClick(user, title, GM, level) {
    return await api.put("char-creation", {
      user,
      title,
      GM,
      name: selected,
      level,
    });
  }

  return (
    <div className="profileDefinition-container">
      <NaviBar history={history} />
      <CharCreationBar ready={selected ? true : false} next={NextClick} history={history} />

      <main>
        <span>{profileDefinition.title}</span>
      </main>
    </div>
  );
}

export default ProfileDefinition;
