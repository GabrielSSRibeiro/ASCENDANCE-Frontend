import React from "react";
import { uuid } from "uuidv4";

import "./styles.css";

function InfoBoxLong({ content }) {
  return (
    <div className="infoBoxLong-container">
      {content.map((item) => (
        <main key={uuid()}>
          <label>{item.title}</label>
          <div>
            {item.texts.map((text) => (
              <p key={uuid()}>{text}</p>
            ))}
          </div>
        </main>
      ))}
    </div>
  );
}

export default InfoBoxLong;
