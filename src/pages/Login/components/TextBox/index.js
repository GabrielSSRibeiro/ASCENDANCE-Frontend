import React from "react";

import "./styles.css";

function TextBox({ content }) {
  return (
    <div className="login-textBox">
      <p>
        {content.map(text => (
          <React.Fragment key={text}>
            {text}
            <br />
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
export default TextBox;
