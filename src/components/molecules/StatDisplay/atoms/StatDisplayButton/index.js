import React from "react";
import ButtonIconSpan from "~/components/particles/ButtonIconSpan";

import "./styles.css";

function StatDisplayButton({ isActive, stat, name, setDisplay, ...props }) {
  const variant = isActive
    ? {
        icon: require("~/assets/playerPanel/" + stat + "Selected.png"),
        classes: {
          div: "StatDisplayButton-container divSelected",
          span: "textSelected",
        },
        onClick: () => setDisplay(""),
      }
    : {
        icon: require("~/assets/playerPanel/" + stat + ".png"),
        classes: {
          div: "StatDisplayButton-container",
          span: "",
        },
        onClick: () => setDisplay(stat),
      };

  const buttonProps = {
    name,
    ...variant,
  };

  return <ButtonIconSpan {...buttonProps} {...props} />;
}

export default StatDisplayButton;
