import React from "react";

import ResourceDiv from "./atoms/ResourceDiv";

import { Container } from "./styles.js";

function ActiveResourceStat({ resource, currentValue, totalValue, name, onClick, ...props }) {
  const resources = { life: "red", essence: "blue" };

  return (
    <Container key={props.key} onClick={() => onClick}>
      <ResourceDiv isEmpty={currentValue === 0} type={resources[resource]} />
      <div className="ActiveResourceStat-texts">
        <span>{currentValue}</span>
        <span>{`/${totalValue} ${name}`}</span>
      </div>
    </Container>
  );
}

export default ActiveResourceStat;
