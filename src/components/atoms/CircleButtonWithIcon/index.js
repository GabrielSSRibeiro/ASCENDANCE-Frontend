import React from "react";
import ButtonIconSpan from "~/components/particles/ButtonIconSpan";

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

  return <ButtonIconSpan {...buttonProps} {...props} />;
}

export default CircleButtonWithIcon;
