import React from "react";
import content from "../../../../utils/content";

import "./styles.css";

function TextBox() {
  return (
    <div className="dashboard-textBox">
      <p>
        {content.dashboard.textBox[1]}
        <br></br>
        <br></br>
        {content.dashboard.textBox[2]}
      </p>
    </div>
  );
}
export default TextBox;
