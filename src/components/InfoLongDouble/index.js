import React from "react";

//import "./styles.css";

function InfoLongDouble({ title1, texts1, title2, texts2 }) {
  return (
    <>
      <div className="row infoLong-box">
        <div className="col info-content">
          <label className="info-label">{title1}</label>
          {texts1.map(text => (
            <p key={texts1.indexOf(text)}>{text}</p>
          ))}
        </div>
        <div className="col info-content">
          <label className="info-label">{title2}</label>
          {texts2.map(text => (
            <p key={texts2.indexOf(text)}>{text}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default InfoLongDouble;
