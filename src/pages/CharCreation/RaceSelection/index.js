import React, { useState } from "react";
import content from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import ReturnMenu from "../../../components/ReturnMenu";
import InfoBoxLong from "../../../components/InfoBoxLong";

import "./styles.css";

function RaceSelection({ history }) {
  const [selected, setSelected] = useState("");

  const races = content.raceSelection.button.races;

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
      race: selected
    });
    history.push("/char-creation-origin");
  }

  return (
    <div className="raceSelection-container">
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnPlayerList} title={content.raceSelection.returnMenu} />
      <main>
        <section>
          {races.map(race => (
            <div key={race}>
              <button
                className={`big-round-button ${selected === race && "selected"}`}
                onClick={() => (race === selected ? setSelected("") : setSelected(race))}
              >
                {race}
              </button>
            </div>
          ))}
        </section>
        <button
          className={`std-button ${!selected && "unavailable"}`}
          onClick={NextClick}
          disabled={selected ? false : true}
        >
          {content.raceSelection.button.next}
        </button>
      </main>
      <section>
        <InfoBoxLong
          content={[
            {
              title: content.raceSelection.infoLongSingle.title,
              texts: content.raceSelection.infoLongSingle.texts
            }
          ]}
        />
      </section>
    </div>
  );
}

export default RaceSelection;
