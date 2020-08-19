import React, { useState, useEffect } from "react";
import { useAuth } from "~/contexts/auth";

import { useLanguage } from "~/contexts/language";
import "./styles.css";
import turnArrow from "~/assets/arrows/turnArrow.png";
import GMd20 from "~/assets/dice/GMd20.png";

function MembersBar({ history }) {
  const { content } = require(`./content/${useLanguage().language}`);
  const [partyMembers, setPartyMembers] = useState([]);

  const { signedApiCall } = useAuth();

  useEffect(() => {
    const GM = localStorage.getItem("user");
    const title = localStorage.getItem("game");

    function LoadPartyMembers() {
      signedApiCall("get", "gm-panel", { params: { GM, title } }).then((response) => {
        setPartyMembers(response.data.party);
      });
    }

    if (title && GM) {
      LoadPartyMembers();
    } else {
      history.push("/dashboard");
    }
  }, [signedApiCall, history]);

  return (
    <div className="membersBar-container">
      <aside>
        <img src={turnArrow} alt="turnArrow" />
      </aside>

      <section>
        {partyMembers.map((member) => (
          <div
            key={member._id}
            style={{
              backgroundImage: member.avatar && `url(${member.avatar})`,
              backgroundSize: "100%",
            }}
          >
            <p>{!member.avatar && "..."}</p>
          </div>
        ))}
      </section>

      <aside>
        <img src={GMd20} alt="GMd20" />
        <label>{content}</label>
      </aside>
    </div>
  );
}

export default MembersBar;
