import React, { useState } from "react";
import { raceSelection } from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import InfoBoxLong from "../../../components/InfoBoxLong";

import "./styles.css";

function RaceSelection({ history }) {
  const [selected, setSelected] = useState(JSON.parse(localStorage.getItem("character")).race);

  const races = Object.entries(raceSelection.races).map((race) => race);

  async function NextClick(user, title, GM, level) {
    return await api.put("char-creation", {
      user,
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
        <span>{raceSelection.title}</span>
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
      <section>
        <InfoBoxLong
          // if there is no race selected, show default
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
                    title: raceSelection.race.name,
                    texts: raceSelection.race.infoBoxLong,
                  },
                ]
          }
        />
      </section>
    </div>
  );
}

export default RaceSelection;
