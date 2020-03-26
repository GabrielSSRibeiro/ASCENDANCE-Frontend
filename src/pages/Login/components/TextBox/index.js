import React from "react";
import content from "../../../../utils/content";

import "./styles.css";

function TextBox() {
  return (
    <div className="login-textBox">
      <p>
        {content.login.textBox[1]}
        <br></br>
        <br></br>
        {content.login.textBox[2]}
        <br></br>
        <br></br>
        {content.login.textBox[3]}
      </p>
    </div>
  );
}
export default TextBox;
