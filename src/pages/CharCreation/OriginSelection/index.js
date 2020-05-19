import React, { useState } from "react";
import { originSelection } from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import CharCreationOutline from "../../../components/CharCreationOutline";
import InfoBoxLong from "../../../components/InfoBoxLong";

import "./styles.css";

function OriginSelection({ history }) {
  const [selected, setSelected] = useState(JSON.parse(localStorage.getItem("character")).origin);

  const dictionary = {
    "5e80a01a-75bb-4632-86d5-fa83953276e3": { lifeDie: 4 },
    "223d1dcb-8828-4f4a-a936-7d9832c91a17": { lifeDie: 6 },
    "0839e1e4-da98-4f30-a09d-c226c9070aca": { lifeDie: 8 },
    "1de4ffc4-feff-4539-b0e8-fc391633466d": { lifeDie: 10 },
    "37b1eaf8-7d28-4d48-8eb4-f8bc45d23b80": { lifeDie: 12 },
  };
  const origins = Object.entries(originSelection.origins).map((origin) => {
    return { ...origin, lifeDie: dictionary[origin[1].id].lifeDie };
  });

  async function NextClick(user, title, GM, level) {
    let lifeDie;
    lifeDie = origins.find((value) => value[1].name === selected).lifeDie;

    return await api.put("char-creation", {
      user,
      title,
      GM,
      origin: selected,
      lifeDie,
      level,
    });
  }

  return (
    <div className="originSelection-container">
      <NaviBar history={history} />
      <CharCreationBar ready={selected ? true : false} next={NextClick} history={history} />

      <main>
        <CharCreationOutline content={originSelection} />
        <span>{originSelection.title}</span>
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
                  title: originSelection.origin.name,
                  texts: originSelection.origin.infoBoxLong,
                },
              ]
        }
      />
    </div>
  );
}

export default OriginSelection;
