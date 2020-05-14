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

  async function HandleNext() {
    const user = localStorage.getItem("user");
    const title = localStorage.getItem("game");
    const GM = localStorage.getItem("GM");
    let level = parseInt(JSON.parse(localStorage.getItem("character")).level);

    // updates the level based on last page completed
    const current = parseInt(
      window.location.pathname.slice(window.location.pathname.lastIndexOf("-") + 1)
    );
    if (level < current) {
      level = current;
    }

    const response = await next(user, title, GM, level);
    const player = response.data.party.find((value) => value.user === localStorage.getItem("user"));

    // updates local storage
    localStorage.setItem("character", JSON.stringify(player));

    if (current > 10) {
      history.push("/player-panel");
    } else {
      history.push(`/char-creation-${current + 1}`);
    }
  }

  function HandlePrevious() {
    if (current > 0) {
      history.push(`/char-creation-${current - 1}`);
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
      <button
        className={!ready ? "notReady" : ""}
        disabled={ready ? false : true}
        onClick={HandleNext}
      >
        {progressBar[current].next}
      </button>
    </div>
  );
}

export default CharCreationBar;
