import React, { useState, useEffect } from "react";
import { useAuth } from "~/contexts/auth";

import NaviBar from "~molecules/NaviBar";
import ReturnMenu from "~molecules/ReturnMenu";

import { useLanguage } from "~/contexts/language";
import "./styles.css";
import deleteIcon from "~/assets/edition/delete.png";

function Management({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [partyMembers, setPartyMembers] = useState([]);

  const { signedApiCall } = useAuth();

  function ReturnGMPanel() {
    history.push("/gm-panel");
  }

  function RemovePlayer(user) {
    const playerUser = user;
    const title = localStorage.getItem("game");

    signedApiCall("delete", "player-games", {
      params: { title, playerUser },
    }).then((response) => {
      setPartyMembers(response.data.party);
    });
  }

  async function NewPlayerClick() {
    history.push("/gm-new-player");
  }

  useEffect(() => {
    function LoadPartyMembers() {
      const title = localStorage.getItem("game");
      signedApiCall("get", "gm-panel", { params: { title } }).then((response) => {
        setPartyMembers(response.data.party);
      });
    }

    LoadPartyMembers();
  }, [signedApiCall]);

  return (
    <div className="management-container">
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnGMPanel} title={content.returnMenu} />
      <main>
        {partyMembers.map((member) => (
          <section key={member._id}>
            <img src={deleteIcon} onClick={() => RemovePlayer(member.user)} alt="Delete" />
            <div
              style={{
                backgroundImage: member.avatar && `url(${member.avatar})`,
                backgroundSize: "100%",
              }}
            >
              {!member.avatar && <label>{content.avatar}</label>}
            </div>
            <label>{member.name ? member.name : member.user}</label>
            <button className="sl-button">{content.button.manage}</button>
          </section>
        ))}
        {partyMembers.length < 5 && (
          <button className="sl-button" onClick={NewPlayerClick}>
            {content.button.add}
          </button>
        )}
      </main>

      <section>
        <label>{content.label}</label>
        <textarea placeholder={content.textArea}></textarea>
      </section>
    </div>
  );
}

export default Management;
