import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import content from "../../../utils/content";

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
    const response = await api.delete("player-games", { params: { title, playerUser } });

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
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnGMPanel} title={content.management.returnMenu} />
      <div className="row management-area align-items-center justify-content-center">
        {partyMembers.map(member => (
          <React.Fragment key={member._id}>
            <div className="col-auto management-member">
              <img
                className="management-delete-img"
                src={deleteIcon}
                onClick={() => RemovePlayer(member.user)}
                alt="Delete"
              />
              <div className="management-avatar">
                <label htmlFor="userAvatar" className="management-avatar-label">
                  {member.user}
                </label>
              </div>
              <button className="sl-button management-btn">
                {content.management.button.manage}
              </button>
            </div>
          </React.Fragment>
        ))}
        <div className="col-auto" style={{ display: partyMembers.length < 5 ? "" : "none" }}>
          <button className="sl-button" onClick={NewPlayerClick}>
            {content.management.button.add}
          </button>
        </div>
      </div>

      {/* notes */}
      <label className="management-notes-label" htmlFor="generalNotes">
        {content.management.label}
      </label>
      <textarea
        className="management-general-notes"
        placeholder={content.management.textArea}
      ></textarea>
    </>
  );
}

export default Management;
