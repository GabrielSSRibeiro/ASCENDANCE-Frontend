import React, { useState } from "react";
import content from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import ReturnMenu from "../../../components/ReturnMenu";
import InfoLongSingle from "../../../components/InfoLongSingle";

import "./styles.css";

function RaceSelection({ history }) {
  const initialState = {
    selected: "",
    human: "",
    dwarf: "",
    elf: "",
    halfling: "",
    hybrid: ""
  };

  const [{ selected, human, dwarf, elf, halfling, hybrid }, setRace] = useState(initialState);

  function ReturnPlayerList() {
    history.push("/dashboard-player-list");
  }

  function HumanClick() {
    if (human === initialState.human) {
      setRace({
        selected: content.raceSelection.button.human,
        human: "selected",
        dwarf: "",
        elf: "",
        halfling: "",
        hybrid: ""
      });
    } else {
      setRace(initialState);
    }
  }

  function DwarfClick() {
    if (dwarf === initialState.dwarf) {
      setRace({
        selected: content.raceSelection.button.dwarf,
        human: "",
        dwarf: "selected",
        elf: "",
        halfling: "",
        hybrid: ""
      });
    } else {
      setRace(initialState);
    }
  }

  function ElfClick() {
    if (elf === initialState.elf) {
      setRace({
        selected: content.raceSelection.button.elf,
        human: "",
        dwarf: "",
        elf: "selected",
        halfling: "",
        hybrid: ""
      });
    } else {
      setRace(initialState);
    }
  }

  function HalflingClick() {
    if (halfling === initialState.halfling) {
      setRace({
        selected: content.raceSelection.button.halfling,
        human: "",
        dwarf: "",
        elf: "",
        halfling: "selected",
        hybrid: ""
      });
    } else {
      setRace(initialState);
    }
  }

  function HybridClick() {
    if (hybrid === initialState.hybrid) {
      setRace({
        selected: content.raceSelection.button.hybrid,
        human: "",
        dwarf: "",
        elf: "",
        halfling: "",
        hybrid: "selected"
      });
    } else {
      setRace(initialState);
    }
  }

  async function NextClick() {
    const user = localStorage.getItem("user");
    const title = localStorage.getItem("game");
    const GM = localStorage.getItem("GM");

    if (selected !== initialState.selected) {
      await api.put("char-creation", {
        user,
        title,
        GM,
        race: selected
      });
      history.push("/char-creation-origin");
    }
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnPlayerList} title={content.raceSelection.returnMenu} />

      <button className={`big-round-button raceSelection-btn ${human}`} onClick={HumanClick}>
        {content.raceSelection.button.human}
      </button>

      <button className={`big-round-button raceSelection-btn ${dwarf}`} onClick={DwarfClick}>
        {content.raceSelection.button.dwarf}
      </button>

      <button className={`big-round-button raceSelection-btn ${elf}`} onClick={ElfClick}>
        {content.raceSelection.button.elf}
      </button>

      <button className={`big-round-button raceSelection-btn ${halfling}`} onClick={HalflingClick}>
        {content.raceSelection.button.halfling}
      </button>

      <div className="w-100"></div>

      <button
        className={`big-round-button raceSelection-btn-hybrid ${hybrid}`}
        onClick={HybridClick}
      >
        {content.raceSelection.button.hybrid}
      </button>

      <div className="w-100"></div>

      <button className="std-button raceSelection-btn-next" onClick={NextClick}>
        {content.raceSelection.button.next}
      </button>

      <InfoLongSingle
        title={content.raceSelection.infoLongSingle.title}
        texts={[
          content.raceSelection.infoLongSingle.texts[1],
          content.raceSelection.infoLongSingle.texts[2]
        ]}
      />
    </>
  );
}

export default RaceSelection;
