import React from "react";
import ButtonWithIcon from "~particles/ButtonWithIcon";

function CircleButtonWithIcon({ isActive, stat, name, setDisplay, ...props }) {
  const buttonProps = isActive
    ? {
        name,
        icon: require(`~/assets/playerPanel/${stat}Selected.png`),
        styles: {
          div: "StatDisplay-divSelected",
          text: "StatDisplay-textSelected",
        },
        onClick: () => setDisplay("default"),
      }
    : {
        name,
        icon: require(`~/assets/playerPanel/${stat}.png`),
        styles: {
          div: "",
          text: "",
        },
        onClick: () => setDisplay(stat),
      };

  return <ButtonWithIcon {...buttonProps} {...props} />;
}

export default CircleButtonWithIcon;
