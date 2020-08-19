import React, { useState } from "react";
import { useAuth } from "~/contexts/auth";
import NaviBar from "~/components/organisms/NaviBar";
import CharCreationBar from "~/components/organisms/CharCreationBar";
import InfoBoxLong from "~/components/organisms/InfoBoxLong";

import { useLanguage } from "~/contexts/language";
import "./styles.css";

function CharacteristicsDefinition({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [selected, setSelected] = useState({
    personality: JSON.parse(localStorage.getItem("character")).personality,
    occupation: JSON.parse(localStorage.getItem("character")).occupation,
    goal: JSON.parse(localStorage.getItem("character")).goal,
    flaw: JSON.parse(localStorage.getItem("character")).flaw,
  });

  const { signedApiCall } = useAuth();

  const characteristics = Object.entries(content.characteristics).map((characteristic) => {
    return { ...characteristic };
  });

  async function NextClick(title, GM, level) {
    return await signedApiCall("put", "char-creation", {
      title,
      GM,
      personality: selected.personality,
      occupation: selected.occupation,
      goal: selected.goal,
      flaw: selected.flaw,
      level,
    });
  }

  return (
    <div className="characteristicsDefinition-container">
      <NaviBar history={history} />
      <CharCreationBar
        ready={
          selected.personality && selected.occupation && selected.goal && selected.flaw
            ? true
            : false
        }
        next={NextClick}
        history={history}
      />

      <main>
        <span>{content.title}</span>
        <section>
          {characteristics.map((characteristic) => (
            <div key={characteristic[1].title}>
              <label>{characteristic[1].title}</label>
              <textarea
                placeholder={characteristic[1].placeholder}
                onChange={(e) => setSelected({ ...selected, [characteristic[0]]: e.target.value })}
                value={selected[characteristic[0]]}
              ></textarea>
            </div>
          ))}
        </section>
      </main>

      <InfoBoxLong
        content={[
          {
            title: content.infoBoxLong.title,
            texts: content.infoBoxLong.texts,
          },
        ]}
      />
    </div>
  );
}

export default CharacteristicsDefinition;
