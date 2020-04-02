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
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnPlayerList} title={content.raceSelection.returnMenu} />

      {races.map(race => (
        <React.Fragment key={race}>
          {/* addes a br for the last button */}
          {races.indexOf(race) + 1 === races.length && <div className="w-100"></div>}
          <button
            // changes class for the last button
            className={`big-round-button  
                ${
                  races.indexOf(race) + 1 === races.length
                    ? "raceSelection-btn-hybrid"
                    : "raceSelection-btn"
                } ${selected === race && "selected"}`}
            onClick={() => (race === selected ? setSelected("") : setSelected(race))}
          >
            {race}
          </button>
        </React.Fragment>
      ))}

      <div className="w-100"></div>

      <button
        className={`std-button raceSelection-btn-next ${!selected && "unavailable"}`}
        onClick={selected && NextClick}
      >
        {content.raceSelection.button.next}
      </button>

      <InfoBoxLong
        content={[
          {
            title: content.raceSelection.infoLongSingle.title,
            texts: content.raceSelection.infoLongSingle.texts
          }
        ]}
      />
    </>
  );
}

export default RaceSelection;
