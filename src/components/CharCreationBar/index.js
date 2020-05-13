import React, { useEffect } from "react";
import { progressBar } from "../../utils/content";

import "./styles.css";

function CharCreationBar({ ready, next, history }) {
  const player = JSON.parse(localStorage.getItem("character"));
  const current = parseInt(
    window.location.pathname.slice(window.location.pathname.lastIndexOf("-") + 1)
  );

  useEffect(() => {
    if (!localStorage.getItem("game")) {
      history.push("/dashboard-player-list");
    }
  }, [history]);

  function HandlePrevious() {
    if (current > 0) {
      history.push(`/char-creation-${current + -1}`);
    } else {
      history.push("/dashboard-player-list");
    }
  }

  function HandleClick(index) {
    history.push(`/char-creation-${index}`);
  }

  return (
    <div className="CharCreationBar-container">
      <button onClick={HandlePrevious}>{progressBar[current].previous}</button>
      <main>
        {progressBar.map((item, index) => (
          // char creation buttons
          <button
            key={index}
            style={{ width: `calc(100% / ${progressBar.length})` }}
            onClick={() => HandleClick(index)}
            disabled={index <= player.level + 1 ? false : true}
          >
            <p>{item.name}</p>
            {/* paints already completed */}
            {index <= player.level + 1 ? (
              // circle current one
              <div className={index === current ? "selected" : "completed"}>
                {index === current && <div className="completed"></div>}
              </div>
            ) : (
              <div></div>
            )}
            <hr />
          </button>
        ))}
      </main>
      <button className={!ready ? "notReady" : ""} disabled={ready ? false : true} onClick={next}>
        {progressBar[current].next}
      </button>
    </div>
  );
}

export default CharCreationBar;
