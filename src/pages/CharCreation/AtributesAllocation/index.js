import React, { useState } from "react";
import { atributesAllocation } from "../../../utils/content";
import api from "../../../services/api";
import NaviBar from "../../../components/NaviBar";
import CharCreationBar from "../../../components/CharCreationBar";
import CharCreationOutline from "../../../components/CharCreationOutline";
import InfoBoxLong from "../../../components/InfoBoxLong";

import "./styles.css";

function AtributesAllocation({ history }) {
  const [selected, setSelected] = useState({
    feel: JSON.parse(localStorage.getItem("character")).feel,
    create: JSON.parse(localStorage.getItem("character")).create,
    change: JSON.parse(localStorage.getItem("character")).change,
    control: JSON.parse(localStorage.getItem("character")).control,
  });

  const disciplines = Object.entries(atributesAllocation.disciplines).map((discipline) => {
    return { ...discipline };
  });
  const total = Object.values(selected).reduce((acc, cur) => acc + cur, 0);

  async function NextClick(user, title, GM, level) {
    return await api.put("char-creation", {
      user,
      title,
      GM,
      feel: selected.feel,
      create: selected.create,
      change: selected.change,
      control: selected.control,
      level,
    });
  }

  return (
    <div className="atributesAllocation-container">
      <NaviBar history={history} />
      <CharCreationBar
        ready={total === JSON.parse(localStorage.getItem("character")).disciplines ? true : false}
        next={NextClick}
        history={history}
      />

      <main>
        <CharCreationOutline content={atributesAllocation} />
        <span>{atributesAllocation.title}</span>
        <section>
          <span>
            <strong>{total}</strong>/{JSON.parse(localStorage.getItem("character")).disciplines}
          </span>
          {disciplines.map((discipline) => (
            <div key={discipline[1]}>
              <div className="nodes">
                {/* {for( let index = 0; index < 4; index++) {}return ( */}
                {Array.from(Array(4)).map((item, index) => (
                  <button
                    key={index}
                    className={`${
                      selected[discipline[0]] === index &&
                      total < JSON.parse(localStorage.getItem("character")).disciplines
                        ? ""
                        : selected[discipline[0]] > index
                        ? "selected"
                        : "disabled"
                    }`}
                    onClick={() =>
                      selected[discipline[0]] === index
                        ? total < JSON.parse(localStorage.getItem("character")).disciplines &&
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
              <label>{discipline[1]}</label>
            </div>
          ))}
        </section>
      </main>

      <InfoBoxLong
        content={[
          {
            title: atributesAllocation.infoBoxLong.points,
            texts: atributesAllocation.discipline.points,
          },
          {
            title: atributesAllocation.infoBoxLong.discipline,
            texts: atributesAllocation.discipline.discipline,
          },
        ]}
      />
    </div>
  );
}

export default AtributesAllocation;
