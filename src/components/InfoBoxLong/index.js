import React from "react";

import "./styles.css";

function InfoBoxLong({ content }) {
  return (
    <div className="infoBoxLong-container">
      {content.map((item) => (
        <main key={item}>
          <label>{item.title}</label>
          <div>
            {item.texts.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </main>
      ))}
    </div>
  );
}

export default InfoBoxLong;
