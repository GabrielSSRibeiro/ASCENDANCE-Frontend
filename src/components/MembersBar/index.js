import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { membersBar } from "../../utils/content";

import "./styles.css";
import turnArrow from "../../assets/arrows/turnArrow.png";
import GMd20 from "../../assets/dice/GMd20.png";

function MembersBar() {
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
    <div className="membersBar-container">
      <aside>
        <img src={turnArrow} alt="turnArrow" />
      </aside>

      <section>
        {partyMembers.map((member) => (
          <React.Fragment key={member._id}>
            <div></div>
            <div></div>
          </React.Fragment>
        ))}
      </section>

      <aside>
        <img src={GMd20} alt="GMd20" />
        <label>{membersBar}</label>
      </aside>
    </div>
  );
}

export default MembersBar;
