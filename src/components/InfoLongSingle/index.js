import React from "react";

import "./styles.css";

function InfoLongSingle({ title, texts }) {
  return (
    <>
      <div className="row infoLong-box">
        <div className="col info-content">
          <label className="info-label">{title}</label>
          {texts.map(text => (
            <p key={texts.indexOf(text)}>{text}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default InfoLongSingle;
