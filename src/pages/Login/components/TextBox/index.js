import React from "react";

function TextBox({ content }) {
  return (
    <aside>
      {content.map(text => (
        <p key={text}>{text}</p>
      ))}
    </aside>
  );
}
export default TextBox;
