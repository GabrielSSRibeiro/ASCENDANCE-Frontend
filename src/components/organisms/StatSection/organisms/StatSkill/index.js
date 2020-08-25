import React from "react";

import SingleStat from "~/components/organisms/SingleStat";

import { firstHalf, secondHalf } from "~/utils/functions";

import { Container } from "./styles.js";
import intelligence from "~/assets/playerPanel/intelligence.png";
import strength from "~/assets/playerPanel/strength.png";
import charisma from "~/assets/playerPanel/charisma.png";
import constitution from "~/assets/playerPanel/constitution.png";
import dexterity from "~/assets/playerPanel/dexterity.png";
import wisdom from "~/assets/playerPanel/wisdom.png";

function StatSkill({ side, content, player }) {
  const variant = {
    left: {
      imgs: [intelligence, strength, charisma],
      content: firstHalf(Object.entries(content)),
    },
    right: {
      imgs: [constitution, dexterity, wisdom],
      content: secondHalf(Object.entries(content)),
    },
  };
  console.log(player);
  const StatSkillProps = variant[side];

  return (
    <Container>
      <div>
        {StatSkillProps.imgs.map((img) => (
          <img key={img} src={img} alt={img} />
        ))}
      </div>

      <div>
        {StatSkillProps.content.map((item) => {
          const stat = item[0];
          const name = item[1];

          return (
            <SingleStat
              key={stat}
              isEnhancebled={player.totalEssence > 0}
              value={player[stat]}
              name={name}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default StatSkill;
