import React, { useState } from "react";
import { atributesAllocation } from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import InfoBoxLong from "../../../components/InfoBoxLong";

import "./styles.css";

function AtributesAllocation({ history }) {
  const [selected, setSelected] = useState({
    intelligence: JSON.parse(localStorage.getItem("character")).intelligence,
    strength: JSON.parse(localStorage.getItem("character")).strength,
    charisma: JSON.parse(localStorage.getItem("character")).charisma,
    constitution: JSON.parse(localStorage.getItem("character")).constitution,
    dexterity: JSON.parse(localStorage.getItem("character")).dexterity,
    wisdom: JSON.parse(localStorage.getItem("character")).wisdom,
  });

  const disciplines = Object.entries(atributesAllocation.disciplines).map((discipline) => {
    return { ...discipline };
  });
  const total = Object.values(selected).reduce((acc, cur) => acc + cur, 0);
  const max = 10;

  async function NextClick(user, title, GM, level) {
    return await api.put("char-creation", {
      user,
      title,
      GM,
      intelligence: selected.intelligence,
      strength: selected.strength,
      charisma: selected.charisma,
      constitution: selected.constitution,
      dexterity: selected.dexterity,
      wisdom: selected.wisdom,
      level,
    });
  }

  return (
    <div className="atributesAllocation-container">
      <NaviBar history={history} />
      <CharCreationBar ready={total === max ? true : false} next={NextClick} history={history} />

      <main>
        <span>{atributesAllocation.title}</span>
        <section>
          <span>
            <strong>{total}</strong>/{max}
          </span>
          {disciplines.map((discipline) => (
            <div key={discipline[1].name}>
              <div className="nodes">
                {Array.from(Array(5)).map((item, index) => (
                  <button
                    key={index}
                    className={`${
                      selected[discipline[0]] === index && total < max
                        ? ""
                        : selected[discipline[0]] > index
                        ? "selected"
                        : "disabled"
                    }`}
                    onClick={() =>
                      selected[discipline[0]] === index
                        ? total < max &&
                          setSelected({
                            ...selected,
                            [discipline[0]]: selected[discipline[0]] + 1,
                          })
                        : setSelected({
                            ...selected,
                            [discipline[0]]: selected[discipline[0]] - 1,
                          })
                    }
                    disabled={selected[discipline[0]] < index ? true : false}
                  ></button>
                ))}
              </div>
              <label>{discipline[1].name}</label>
            </div>
          ))}
        </section>
      </main>

      <InfoBoxLong
        // if there is no selected, show default
        content={
          total !== 0
            ? disciplines.map((discipline) => ({
                title: discipline[1].name,
                texts: discipline[1].infoBoxLong,
              }))
            : [
                {
                  title: atributesAllocation.discipline.name,
                  texts: atributesAllocation.discipline.points,
                },
              ]
        }
      />
    </div>
  );
}

export default AtributesAllocation;
