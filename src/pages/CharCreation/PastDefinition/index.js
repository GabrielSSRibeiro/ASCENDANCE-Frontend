import React, { useState } from "react";
import { originSelection } from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import CharCreationOutline from "../../../components/CharCreationOutline";
import InfoBoxLong from "../../../components/InfoBoxLong";

import "./styles.css";

function MyFunction({ history }) {
  const [selected, setSelected] = useState(JSON.parse(localStorage.getItem("character")).origin);

  const origins = Object.entries(originSelection.origins).map((origin, index) => {
    return { ...origin, index };
  });

  async function NextClick(user, title, GM, level) {
    return await api.put("char-creation", {
      user,
      title,
      GM,
      origin: selected,
      level,
    });
  }

  return (
    <div className="originSelection-container">
      <NaviBar history={history} />
      <CharCreationBar ready={selected ? true : false} next={NextClick} history={history} />

      <main>
        <CharCreationOutline content={originSelection} />
        <span>{originSelection.title}</span>
        <section>
          {origins.map((origin) => (
            <div key={origin[1].name}>
              <button
                className={`big-round-button ${selected === origin[1].name && "selected"}`}
                onClick={() =>
                  origin[1].name === selected ? setSelected("") : setSelected(origin[1].name)
                }
              >
                {origin[1].name}
              </button>
            </div>
          ))}
        </section>
      </main>

      <InfoBoxLong
        // if there is no selected, show default
        content={
          selected !== ""
            ? [
                {
                  title: selected,
                  texts: origins.find((value) => value[1].name === selected)[1].infoBoxLong,
                },
              ]
            : [
                {
                  title: originSelection.origin.name,
                  texts: originSelection.origin.infoBoxLong,
                },
              ]
        }
      />
    </div>
  );
}

export default MyFunction;
