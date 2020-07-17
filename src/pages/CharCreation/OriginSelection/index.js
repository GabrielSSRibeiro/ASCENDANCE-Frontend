import React, { useState } from "react";
import { useAuth } from "../../../contexts/auth";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import CharCreationOutline from "../../../components/CharCreationOutline";
import InfoBoxLong from "../../../components/InfoBoxLong";

import { useLanguage } from "../../../contexts/language";
import "./styles.css";

function OriginSelection({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [selected, setSelected] = useState(JSON.parse(localStorage.getItem("character")).origin);

  const { signedApiCall } = useAuth();

  const origins = Object.entries(content.origins).map((origin, index) => {
    return { ...origin, index };
  });

  async function NextClick(title, GM, level) {
    let lifeDie = 4 + origins.find((value) => value[1].name === selected).index * 2;
    let disciplines = 4 - origins.find((value) => value[1].name === selected).index;

    return await signedApiCall("put", "char-creation", {
      title,
      GM,
      origin: selected,
      lifeDie,
      class: "",
      class2: "",
      disciplines,
      level,
    });
  }

  return (
    <div className="originSelection-container">
      <NaviBar history={history} />
      <CharCreationBar ready={selected ? true : false} next={NextClick} history={history} />

      <main>
        <CharCreationOutline content={content} />
        <span>{content.title}</span>
        <section>
          {origins.map((origin) => (
            <div key={origin[1].name}>
              <button
                className={`big-round-button ${selected === origin[1].name && "selected"}`}
                onClick={() =>
                  origin[1].name === selected ? setSelected("") : setSelected(origin[1].name)
                }
              >
                {origin[1].name}
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
                  texts: origins.find((value) => value[1].name === selected)[1].infoBoxLong,
                },
              ]
            : [
                {
                  title: content.origin.name,
                  texts: content.origin.infoBoxLong,
                },
              ]
        }
      />
    </div>
  );
}

export default OriginSelection;
