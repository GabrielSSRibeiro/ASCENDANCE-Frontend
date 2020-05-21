import React, { useState } from "react";
import { ofensiveSpecialty } from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import CharCreationOutline from "../../../components/CharCreationOutline";
import InfoBoxLong from "../../../components/InfoBoxLong";

import "./styles.css";

function OfensiveSpecialty({ history }) {
  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem("character")).ofensiveSpecialty
  );

  const specialties = Object.entries(ofensiveSpecialty.specialties).map((specialty) => {
    return { ...specialty };
  });

  async function NextClick(user, title, GM, level) {
    return await api.put("char-creation", {
      user,
      title,
      GM,
      ofensiveSpecialty: selected,
      level,
    });
  }

  return (
    <div className="ofensiveSpecialty-container">
      <NaviBar history={history} />
      <CharCreationBar ready={selected ? true : false} next={NextClick} history={history} />

      <main>
        <CharCreationOutline content={ofensiveSpecialty} />
        <span>{ofensiveSpecialty.title}</span>
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
                  title: ofensiveSpecialty.infoBoxLong.bonuses,
                  texts: specialties.find((value) => value[1].name === selected)[1].bonuses,
                },
                {
                  title: ofensiveSpecialty.infoBoxLong.feats,
                  texts: specialties.find((value) => value[1].name === selected)[1].feats,
                },
              ]
            : [
                {
                  title: ofensiveSpecialty.specialty.name,
                  texts: ofensiveSpecialty.specialty.infoBoxLong,
                },
              ]
        }
      />
    </div>
  );
}

export default OfensiveSpecialty;
