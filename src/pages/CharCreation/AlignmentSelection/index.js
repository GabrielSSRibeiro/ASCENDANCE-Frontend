import React, { useState } from "react";
import { useAuth } from "~/contexts/auth";
import NaviBar from "~/components/organisms/NaviBar";
import CharCreationBar from "~/components/organisms/CharCreationBar";
import InfoBoxLong from "~/components/organisms/InfoBoxLong";

import { useLanguage } from "~/contexts/language";

import "./styles.css";

function AlignmentSelection({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem("character")).firstAlignment
  );
  const [selected2, setSelected2] = useState(
    JSON.parse(localStorage.getItem("character")).secondAlignment
  );

  const { signedApiCall } = useAuth();

  const alignments1 = Object.entries(content.firstAlignments).map((alignment) => {
    return { ...alignment };
  });
  const alignments2 = Object.entries(content.secondAlignments).map((alignment) => {
    return { ...alignment };
  });

  async function NextClick(title, GM, level) {
    return await signedApiCall("put", "char-creation", {
      title,
      GM,
      firstAlignment: selected,
      secondAlignment: selected2,
      level,
    });
  }

  return (
    <div className="alignmentSelection-container">
      <NaviBar history={history} />
      <CharCreationBar
        ready={selected && selected2 ? true : false}
        next={NextClick}
        history={history}
      />

      <main>
        <span>{content.title}</span>
        <div>
          <section>
            <span>{content.firstTitle}</span>
            <div className="alignment">
              {alignments1.map((alignment) => (
                <div key={alignment[1].name}>
                  <button
                    className={`big-round-button ${selected === alignment[1].name && "selected"}`}
                    onClick={() =>
                      alignment[1].name === selected
                        ? setSelected("")
                        : setSelected(alignment[1].name)
                    }
                  >
                    {alignment[1].name}
                  </button>
                </div>
              ))}
            </div>
          </section>
          <section>
            <span>{content.secondTitle}</span>
            <div className="alignment">
              {alignments2.map((alignment) => (
                <div key={alignment[1].name}>
                  <button
                    className={`big-round-button ${selected2 === alignment[1].name && "selected"}`}
                    onClick={() =>
                      alignment[1].name === selected2
                        ? setSelected2("")
                        : setSelected2(alignment[1].name)
                    }
                  >
                    {alignment[1].name}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <InfoBoxLong
        // if there is no selected, show default
        content={
          selected || selected2 !== ""
            ? [
                selected
                  ? {
                      title: selected,
                      texts: alignments1.find((value) => value[1].name === selected)[1].infoBoxLong,
                    }
                  : {
                      title: "",
                      texts: [],
                    },
                selected2
                  ? {
                      title: selected2,
                      texts: alignments2.find((value) => value[1].name === selected2)[1]
                        .infoBoxLong,
                    }
                  : {
                      title: "",
                      texts: [],
                    },
              ]
            : [
                {
                  title: content.alignment.name,
                  texts: content.alignment.infoBoxLong,
                },
              ]
        }
      />
    </div>
  );
}

export default AlignmentSelection;
