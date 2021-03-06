import React, { useState } from "react";
import { useAuth } from "~/contexts/auth";
import NaviBar from "~/components/organisms/NaviBar";
import CharCreationBar from "~/components/organisms/CharCreationBar";
import CharCreationOutline from "~/components/organisms/CharCreationOutline";
import InfoBoxLong from "~/components/organisms/InfoBoxLong";

import { useLanguage } from "~/contexts/language";
import "./styles.css";

function DisciplineSelection({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [selected, setSelected] = useState({
    feel: JSON.parse(localStorage.getItem("character")).feel,
    create: JSON.parse(localStorage.getItem("character")).create,
    change: JSON.parse(localStorage.getItem("character")).change,
    control: JSON.parse(localStorage.getItem("character")).control,
  });

  const { signedApiCall } = useAuth();

  const disciplines = Object.entries(content.disciplines).map((discipline) => {
    return { ...discipline };
  });
  const total = Object.values(selected).reduce((acc, cur) => acc + cur, 0);

  async function NextClick(title, GM, level) {
    return await signedApiCall("put", "char-creation", {
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
    <div className="disciplineSelection-container">
      <NaviBar history={history} />
      <CharCreationBar
        ready={total === JSON.parse(localStorage.getItem("character")).disciplines ? true : false}
        next={NextClick}
        history={history}
      />

      <main>
        <CharCreationOutline content={content} />
        <span>{content.title}</span>
        <section>
          <span>
            <strong>{total}</strong>/{JSON.parse(localStorage.getItem("character")).disciplines}
          </span>
          {disciplines.map((discipline) => (
            <div key={discipline[1]}>
              <div className="nodes">
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
            title: content.infoBoxLong.points,
            texts: content.discipline.points,
          },
          {
            title: content.infoBoxLong.discipline,
            texts: content.discipline.discipline,
          },
        ]}
      />
    </div>
  );
}

export default DisciplineSelection;
