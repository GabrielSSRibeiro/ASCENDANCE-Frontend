import React, { useState, useEffect } from "react";
import { subscribeToUser, unSubscribeToUser } from "~/services/socket";
import { useAuth } from "~/contexts/auth";

import NaviBar from "~molecules/NaviBar";
import ReturnMenu from "~molecules/ReturnMenu";

import { useLanguage } from "~/contexts/language";
import "./styles.css";
import deleteIcon from "~/assets/edition/delete.png";
import checkIcon from "~/assets/edition/check.png";

function PlayerGames({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [playerGamesList, setPlayerGamesList] = useState();

  const { signedApiCall } = useAuth();

  function ReturnDashboard() {
    history.push("/dashboard");
  }

  function StartGame(title, GM) {
    localStorage.setItem("game", title);
    localStorage.setItem("GM", GM);

    signedApiCall("get", "gm-panel", {
      params: { GM, title },
    }).then((response) => {
      const player = response.data.party.find(
        (value) => value.user === localStorage.getItem("user")
      );

      if (player.name) {
        history.push("/player-panel");
      } else {
        localStorage.setItem("character", JSON.stringify(player));

        history.push(`/char-creation-${player.level + 1}`);
      }
    });
  }

  function DeleteGame(title, GM) {
    const playerUser = localStorage.getItem("user");
    signedApiCall("delete", "player-games", { params: { title, GM } }).then(() => {
      signedApiCall("get", "player-games", { params: { user: playerUser } }).then((response) => {
        setPlayerGamesList(response.data);
      });
    });
  }

  useEffect(() => {
    function PlayerGamesList() {
      signedApiCall("get", "player-games").then((response) => {
        setPlayerGamesList(response.data);
      });
    }

    PlayerGamesList();
    // socket on
    subscribeToUser(PlayerGamesList);
    // socket off
    return () => unSubscribeToUser();
  }, [signedApiCall]);

  return (
    <div className="player-container">
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnDashboard} title={content.returnMenu} />
      {playerGamesList && (
        <main>
          {playerGamesList.length > 0 && (
            <>
              {playerGamesList.map((game) => {
                let player;
                player = game.party.find((value) => value.user === localStorage.getItem("user"));

                return (
                  <section key={game._id}>
                    <header>
                      <span>{game.title}</span>
                      <img
                        src={deleteIcon}
                        onClick={() => DeleteGame(game.title, game.GM)}
                        alt="Icon made by kiranshastry from www.flaticon.com"
                      />
                    </header>
                    <div>
                      <div
                        style={{
                          backgroundImage: player.avatar && `url(${player.avatar})`,
                          backgroundSize: "100%",
                        }}
                      >
                        {!player.avatar && "..."}
                      </div>
                      <aside>
                        <span>
                          {/* charracter progress display */}
                          <strong>
                            {player.name
                              ? player.name
                              : player.race //checks if started creating
                              ? content.inProgress
                              : content.noCharacter}
                          </strong>
                        </span>
                        <span>
                          {/* only shows level if completely created */}
                          {player.name && (
                            <strong>
                              {content.level} {player.level}
                            </strong>
                          )}
                        </span>
                        <img
                          onClick={() => StartGame(game.title, game.GM)}
                          src={checkIcon}
                          alt="Icon made by Pixel perfect from www.flaticon.com"
                        />
                      </aside>
                    </div>
                  </section>
                );
              })}
            </>
          )}
          {/* no games found */}
          {playerGamesList.length === 0 && <h1>{content.noGames}</h1>}
        </main>
      )}
    </div>
  );
}

export default PlayerGames;
