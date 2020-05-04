import React from "react";

import "./styles.css";

function InfoBoxLong({ content }) {
  return (
    <div className="infoBoxLong-container">
      {content.map((item) => (
        <div key={item}>
          <label>{item.title}</label>

          {item.texts.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default InfoBoxLong;
