import React from "react";

import "./styles.css";

function InfoBoxLong({ className, content }) {
  return (
    <>
      <div className="row info-box-long-box">
        {content.map(item => (
          <React.Fragment key={item}>
            <div className="col info-box-content">
              <label className="info-box-label">{item.title}</label>
              {item.texts.map(text => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default InfoBoxLong;
