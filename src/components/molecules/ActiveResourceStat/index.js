import React from "react";

import ResourceDiv from "./atoms/ResourceDiv";
import TextSpan from "~/components/atoms/TextSpan";

import { Container } from "./styles.js";

function ActiveResourceStat({ resource, currentValue, totalValue, name, onClick, ...props }) {
  const resources = { life: "red", essence: "blue" };

  return (
    <Container key={props.key} onClick={() => onClick}>
      <ResourceDiv isEmpty={currentValue === 0} type={resources[resource]} />
      <div className="ActiveResourceStat-texts">
        <TextSpan text={currentValue} size="large" color="white" />
        <TextSpan text={`${totalValue}/ ${name}`} size="small" color="white" />
      </div>
    </Container>
  );
}

export default ActiveResourceStat;
