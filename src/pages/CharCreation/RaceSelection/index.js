import React, { useState } from "react";
import { useAuth } from "~/contexts/auth";
import NaviBar from "~/components/molecules/NaviBar";
import CharCreationBar from "~/components/molecules/CharCreationBar";
import InfoBoxLong from "~/components/molecules/InfoBoxLong";

import "./styles.css";
import { useLanguage } from "~/contexts/language";

function RaceSelection({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [selected, setSelected] = useState(JSON.parse(localStorage.getItem("character")).race);

  const { signedApiCall } = useAuth();

  const races = Object.entries(content.races).map((race) => race);

  async function NextClick(title, GM, level) {
    return await signedApiCall("put", "char-creation", {
      title,
      GM,
      race: selected,
      level,
    });
  }

  return (
    <div className="raceSelection-container">
      <NaviBar history={history} />
      <CharCreationBar ready={selected ? true : false} next={NextClick} history={history} />
      <main>
        <span>{content.title}</span>
        <section>
          {races.map((race) => (
            <div key={race[1].name}>
              <button
                className={`big-round-button ${selected === race[1].name && "selected"}`}
                onClick={() =>
                  race[1].name === selected ? setSelected("") : setSelected(race[1].name)
                }
              >
                {race[1].name}
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
                  texts: races.find((value) => value[1].name === selected)[1].infoBoxLong,
                },
              ]
            : [
                {
                  title: content.race.name,
                  texts: content.race.infoBoxLong,
                },
              ]
        }
      />
    </div>
  );
}

export default RaceSelection;
