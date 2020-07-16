import React, { useState } from "react";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import CharCreationOutline from "../../../components/CharCreationOutline";
import InfoBoxLong from "../../../components/InfoBoxLong";

import { useLanguage } from "../../../contexts/language";
import "./styles.css";

function MyFunction({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [selected, setSelected] = useState(JSON.parse(localStorage.getItem("character")).class);

  // only classes  related to the chosen origin
  const classes = Object.values(content.classes).filter((value) => {
    return value.lifeDie === JSON.parse(localStorage.getItem("character")).lifeDie;
  });

  async function NextClick(title, GM, level) {
    return await api.put("char-creation", {
      title,
      GM,
      class: selected,
      level,
    });
  }

  return (
    <div className="classSelection-container">
      <NaviBar history={history} />
      <CharCreationBar ready={selected ? true : false} next={NextClick} history={history} />

      <main>
        <CharCreationOutline content={content} />
        <span>{content.title}</span>
        <section>
          {classes.map((element) => (
            <div key={element.name}>
              <button
                className={`big-round-button ${selected === element.name && "selected"}`}
                onClick={() =>
                  element.name === selected ? setSelected("") : setSelected(element.name)
                }
              >
                {element.name}
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
                  title: content.infoBoxLong.theme,
                  texts: classes.find((value) => value.name === selected).theme,
                },
                {
                  title: content.infoBoxLong.mechanic,
                  texts: classes.find((value) => value.name === selected).mechanic,
                },
              ]
            : [
                {
                  title: content.class.name,
                  texts: content.class.infoBoxLong,
                },
              ]
        }
      />
    </div>
  );
}

export default MyFunction;
