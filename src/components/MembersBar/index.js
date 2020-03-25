import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./styles.css";
import turnArrow from "../../assets/arrows/turnArrow.png";
import GMd20 from "../../assets/dice/GMd20.png";

function MembersBar({ history }) {
  const [partyMembers, setPartyMembers] = useState([]);

  useEffect(() => {
    async function LoadPartyMembers() {
      const GM = localStorage.getItem("user");
      const title = localStorage.getItem("game");
      const response = await api.get("gm-panel", { params: { GM, title } });

      setPartyMembers(response.data.party);
    }

    LoadPartyMembers();
  }, []);

  return (
    <>
      <div className="row align-items-center justify-content-center membersBar-box">
        <div className="col-sl membersBar-left">
          <img className="membersBar-turn" src={turnArrow} alt="turnArrow" />
        </div>
        {partyMembers.map(member => (
          <div key={member._id} className="col-sl membersBar-member">
            <div className="membersBar-avatar-border"></div>
            <div className="membersBar-avatar"></div>
          </div>
        ))}
        <div className="col-sl membersBar-right">
          <img className="membersBar-gm" src={GMd20} alt="GMd20" />
          <label htmlFor="GMLabel" className="membersBar-gm-label">
            Mestre
          </label>
        </div>
      </div>
    </>
  );
}

export default MembersBar;
