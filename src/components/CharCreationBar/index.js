import React, { useEffect } from "react";
import { progressBar } from "../../utils/content";

import "./styles.css";

function CharCreationBar({ ready, previous, next, history }) {
  useEffect(() => {
    if (!localStorage.getItem("game")) {
      history.push("/dashboard-player-list");
    }
  }, [history]);

  localStorage.setItem(
    "charCreationCurrent",
    window.location.pathname.slice(window.location.pathname.lastIndexOf("-") + 1)
  );

  function HandleNext() {
    next();

    // updates last page done
    if (
      localStorage.getItem("charCreationCurrent") >= localStorage.getItem("charCreationLastDone")
    ) {
      localStorage.setItem("charCreationLastDone", localStorage.getItem("charCreationCurrent"));
    }

    // pushes to correct page
    if (localStorage.getItem("charCreationCurrent") === 12) {
      localStorage.removeItem("charCreationCurrent");
      localStorage.removeItem("charCreationLastDone");
      history.push("/player-panel");
    } else {
      // updates current to future page
      localStorage.setItem(
        "charCreationCurrent",
        parseInt(localStorage.getItem("charCreationCurrent")) + 1
      );
      history.push(`/char-creation-${localStorage.getItem("charCreationCurrent")}`);
    }
  }

  function HandleClick(index) {
    history.push(`/char-creation-${index}`);
  }

  return (
    <div className="CharCreationBar-container">
      <button onClick={previous}>
        {progressBar[localStorage.getItem("charCreationCurrent")].previous}
      </button>
      <main>
        {progressBar.map((item, index) => (
          <button
            key={index}
            onClick={() => HandleClick(index)}
            disabled={
              index <= parseInt(localStorage.getItem("charCreationLastDone")) + 1 ? false : true
            }
          >
            <p>{item.name}</p>
            {/* paints already completed */}
            {index <= parseInt(localStorage.getItem("charCreationLastDone")) + 1 ? (
              // circle current one
              index === parseInt(localStorage.getItem("charCreationCurrent")) ? (
                <div className="selected">
                  <div className="completed"></div>
                </div>
              ) : (
                <div className="completed"></div>
              )
            ) : (
              <div></div>
            )}
            <hr />
          </button>
        ))}
      </main>
      <button
        className={ready === "" ? "notReady" : ""}
        disabled={ready !== "" ? false : true}
        onClick={HandleNext}
      >
        {progressBar[localStorage.getItem("charCreationCurrent")].next}
      </button>
    </div>
  );
}

export default CharCreationBar;
