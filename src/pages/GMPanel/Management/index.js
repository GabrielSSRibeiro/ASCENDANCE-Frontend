import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import { management } from "../../../utils/content";

import NaviBar from "../../../components/NaviBar";
import ReturnMenu from "../../../components/ReturnMenu";

import "./styles.css";
import deleteIcon from "../../../assets/edition/delete.png";

function Management({ history }) {
  const [partyMembers, setPartyMembers] = useState([]);

  function ReturnGMPanel() {
    history.push("/gm-panel");
  }

  async function RemovePlayer(user) {
    const playerUser = user;
    const title = localStorage.getItem("game");
    const GM = localStorage.getItem("GM");
    const response = await api.delete("player-games", { params: { title, GM, playerUser } });

    setPartyMembers(response.data.party);
  }

  async function NewPlayerClick() {
    history.push("/gm-new-player");
  }

  useEffect(() => {
    async function LoadPartyMembers() {
      const GM = localStorage.getItem("GM");
      const title = localStorage.getItem("game");
      const response = await api.get("gm-panel", { params: { GM, title } });

      setPartyMembers(response.data.party);
    }

    LoadPartyMembers();
  }, []);

  return (
    <div className="management-container">
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnGMPanel} title={management.returnMenu} />
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
              {!member.avatar && <label>{management.avatar}</label>}
            </div>
            <label>{member.name ? member.name : member.user}</label>
            <button className="sl-button">{management.button.manage}</button>
          </section>
        ))}
        {partyMembers.length < 5 && (
          <button className="sl-button" onClick={NewPlayerClick}>
            {management.button.add}
          </button>
        )}
      </main>

      <section>
        <label>{management.label}</label>
        <textarea placeholder={management.textArea}></textarea>
      </section>
    </div>
  );
}

export default Management;
