import React, { useState } from "react";
import { defensiveSpecialty } from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import CharCreationOutline from "../../../components/CharCreationOutline";
import InfoBoxLong from "../../../components/InfoBoxLong";

import "./styles.css";

function DefensiveSpecialty({ history }) {
  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem("character")).defensiveSpecialty
  );

  const specialties = Object.entries(defensiveSpecialty.specialties).map((specialty) => {
    return { ...specialty };
  });

  async function NextClick(user, title, GM, level) {
    return await api.put("char-creation", {
      user,
      title,
      GM,
      defensiveSpecialty: selected,
      level,
    });
  }

  return (
    <div className="defensiveSpecialty-container">
      <NaviBar history={history} />
      <CharCreationBar ready={selected ? true : false} next={NextClick} history={history} />

      <main>
        <CharCreationOutline content={defensiveSpecialty} />
        <span>{defensiveSpecialty.title}</span>
        <section>
          {specialties.map((specialty) => (
            <div key={specialty[1].name}>
              <button
                className={`big-round-button ${selected === specialty[1].name && "selected"}`}
                onClick={() =>
                  specialty[1].name === selected ? setSelected("") : setSelected(specialty[1].name)
                }
              >
                {specialty[1].name}
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
                  title: defensiveSpecialty.infoBoxLong.bonuses,
                  texts: specialties.find((value) => value[1].name === selected)[1].bonuses,
                },
                {
                  title: defensiveSpecialty.infoBoxLong.feats,
                  texts: specialties.find((value) => value[1].name === selected)[1].feats,
                },
              ]
            : [
                {
                  title: defensiveSpecialty.specialty.name,
                  texts: defensiveSpecialty.specialty.infoBoxLong,
                },
              ]
        }
      />
    </div>
  );
}

export default DefensiveSpecialty;
