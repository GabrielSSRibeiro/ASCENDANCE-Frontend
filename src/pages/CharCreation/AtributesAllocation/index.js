import React, { useState } from "react";
import { useAuth } from "~/contexts/auth";
import NaviBar from "~/components/organisms/NaviBar";
import CharCreationBar from "~/components/organisms/CharCreationBar";
import InfoBoxLong from "~/components/organisms/InfoBoxLong";

import { useLanguage } from "~/contexts/language";
import "./styles.css";

function AtributesAllocation({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [selected, setSelected] = useState({
    intelligence: JSON.parse(localStorage.getItem("character")).intelligence,
    strength: JSON.parse(localStorage.getItem("character")).strength,
    charisma: JSON.parse(localStorage.getItem("character")).charisma,
    constitution: JSON.parse(localStorage.getItem("character")).constitution,
    dexterity: JSON.parse(localStorage.getItem("character")).dexterity,
    wisdom: JSON.parse(localStorage.getItem("character")).wisdom,
  });

  const { signedApiCall } = useAuth();

  const atributes = Object.entries(content.atributes).map((atribute) => ({ ...atribute }));
  const total = Object.values(selected).reduce((acc, cur) => acc + cur, 0);
  const max = 10;

  async function NextClick(title, GM, level) {
    return await signedApiCall("put", "char-creation", {
      title,
      GM,
      intelligence: selected.intelligence,
      history: selected.intelligence,
      reasoning: selected.intelligence,

      strength: selected.strength,
      athletics: selected.strength,
      intimidation: selected.strength,

      charisma: selected.charisma,
      improvisation: selected.charisma,
      intuition: selected.charisma,

      constitution: selected.constitution,
      vigor: selected.constitution,
      survival: selected.constitution,

      dexterity: selected.dexterity,
      stealth: selected.dexterity,
      lightness: selected.dexterity,

      wisdom: selected.wisdom,
      nature: selected.wisdom,
      perception: selected.wisdom,
      level,
    });
  }

  return (
    <div className="atributesAllocation-container">
      <NaviBar history={history} />
      <CharCreationBar ready={total === max ? true : false} next={NextClick} history={history} />

      <main>
        <span>{content.title}</span>
        <section>
          <span>
            <strong>{total}</strong>/{max}
          </span>
          {atributes.map((atribute) => (
            <div key={atribute[1].name}>
              <div className="nodes">
                {Array.from(Array(5)).map((item, index) => (
                  <button
                    key={index}
                    className={`${
                      selected[atribute[0]] === index && total < max
                        ? ""
                        : selected[atribute[0]] > index
                        ? "selected"
                        : "disabled"
                    }`}
                    onClick={() =>
                      selected[atribute[0]] === index
                        ? total < max &&
                          setSelected({
                            ...selected,
                            [atribute[0]]: selected[atribute[0]] + 1,
                          })
                        : setSelected({
                            ...selected,
                            [atribute[0]]: selected[atribute[0]] - 1,
                          })
                    }
                    disabled={selected[atribute[0]] < index ? true : false}
                  ></button>
                ))}
              </div>
              <label>{atribute[1].name}</label>
            </div>
          ))}
        </section>
      </main>

      <InfoBoxLong
        // if there is no selected, show default
        content={
          total !== 0
            ? atributes.map((atribute) => ({
                title: atribute[1].name,
                texts: atribute[1].infoBoxLong,
              }))
            : [
                {
                  title: content.atribute.name,
                  texts: content.atribute.points,
                },
              ]
        }
      />
    </div>
  );
}

export default AtributesAllocation;
