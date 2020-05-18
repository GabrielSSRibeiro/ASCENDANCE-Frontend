import React from "react";

import "./styles.css";

function CharCreationOutline({ content }) {
  const outline = Object.entries(content.outline).map((item, index) => {
    return {
      title: item[1],
      text: JSON.parse(localStorage.getItem("character"))[item[0]],
    };
  });

  return (
    <div className="charCreationOutline-container">
      {outline.map((item) => (
        <div key={item.title}>
          <label>{item.title}:</label>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default CharCreationOutline;
