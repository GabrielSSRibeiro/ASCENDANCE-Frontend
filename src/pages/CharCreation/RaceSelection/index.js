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

  function ReturnPlayerList() {
    history.push("/dashboard-player-list");
  }

  async function NextClick() {
    const user = localStorage.getItem("user");
    const title = localStorage.getItem("game");
    const GM = localStorage.getItem("GM");
    let level = parseInt(JSON.parse(localStorage.getItem("character")).level);

    // updates the level based on last page completed
    const current = parseInt(
      window.location.pathname.slice(window.location.pathname.lastIndexOf("-") + 1)
    );
    if (level < current) {
      level = current;
    }

    const response = await api.put("char-creation", {
      user,
      title,
      GM,
      race: selected,
      level,
    });

    // updates local storage
    const player = response.data.party.find((value) => value.user === localStorage.getItem("user"));
    localStorage.setItem("character", JSON.stringify(player));

    history.push(`/char-creation-${current + 1}`);
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
