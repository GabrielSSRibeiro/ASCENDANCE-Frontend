import React from "react";

function TextBox({ content }) {
  return (
    <>
      {content.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </>
  );
}
export default TextBox;
