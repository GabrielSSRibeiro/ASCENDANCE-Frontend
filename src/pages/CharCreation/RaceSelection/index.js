import React, { useState } from "react";
import { raceSelection } from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import InfoBoxLong from "../../../components/InfoBoxLong";

import "./styles.css";

function RaceSelection({ history }) {
  const [selected, setSelected] = useState("");

  const races = Object.keys(raceSelection.races).map((race, index) => {
    return {
      index,
      name: raceSelection.races[race].name,
      infoBoxLong: raceSelection.races[race].infoBoxLong,
    };
  });

  function ReturnPlayerList() {
    history.push("/dashboard-player-list");
  }

  async function NextClick() {
    const user = localStorage.getItem("user");
    const title = localStorage.getItem("game");
    const GM = localStorage.getItem("GM");

    await api.put("char-creation", {
      user,
      title,
      GM,
      race: races[selected].name,
    });
  }

  return (
    <div className="raceSelection-container">
      <NaviBar history={history} />
      <CharCreationBar
        ready={selected}
        previous={ReturnPlayerList}
        next={NextClick}
        history={history}
      />
      <main>
        <span>{raceSelection.title}</span>
        <section>
          {races.map((race) => (
            <div key={race.name}>
              <button
                className={`big-round-button ${selected === race.index && "selected"}`}
                onClick={() =>
                  race.index === selected ? setSelected("") : setSelected(race.index)
                }
              >
                {race.name}
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
                    title: races[selected].name,
                    texts: races[selected].infoBoxLong,
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
