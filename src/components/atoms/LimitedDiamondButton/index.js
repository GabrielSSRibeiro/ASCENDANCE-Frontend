import React from "react";
import Button2xSpanSpan from "~/components/particles/Button2xSpanSpan";

import "./styles.css";

function LimitedDiamondButton({ stat, current, total, name, setBoxDisplay, ...props }) {
  const buttonProps = {
    current,
    total: `/${total}`,
    name,
    classes: { div: `LimitedDiamondButton-container ${stat}` },
    onClick: () => setBoxDisplay(stat),
  };

  return <Button2xSpanSpan {...buttonProps} {...props} />;
}

export default LimitedDiamondButton;
