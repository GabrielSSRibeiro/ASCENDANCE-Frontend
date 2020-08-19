import React, { useState } from "react";
import { useAuth } from "~/contexts/auth";
import NaviBar from "~/components/organisms/NaviBar";
import CharCreationBar from "~/components/organisms/CharCreationBar";
import CharCreationOutline from "~/components/organisms/CharCreationOutline";
import InfoBoxLong from "~/components/organisms/InfoBoxLong";

import { useLanguage } from "~/contexts/language";
import "./styles.css";

function DefensiveSpecialty({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem("character")).defensiveSpecialty
  );

  const { signedApiCall } = useAuth();

  const specialties = Object.entries(content.specialties).map((specialty) => {
    return { ...specialty };
  });

  async function NextClick(title, GM, level) {
    return await signedApiCall("put", "char-creation", {
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
        <CharCreationOutline content={content} />
        <span>{content.title}</span>
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
                  title: content.infoBoxLong.bonuses,
                  texts: specialties.find((value) => value[1].name === selected)[1].bonuses,
                },
                {
                  title: content.infoBoxLong.feats,
                  texts: specialties.find((value) => value[1].name === selected)[1].feats,
                },
              ]
            : [
                {
                  title: content.specialty.name,
                  texts: content.specialty.infoBoxLong,
                },
              ]
        }
      />
    </div>
  );
}

export default DefensiveSpecialty;
