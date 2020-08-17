const React = require("react");

module.exports.content = {
  title: "Escolha a Classe",
  outline: {
    race: "Raça",
    origin: "Origem Mágica",
  },
  class: {
    name: "Classe",
    infoBoxLong: ["Descrever o que é uma classe"],
  },
  classes: {
    sorcerer: {
      lifeDie: 4,
      name: "Feiticeiro",
      theme: ["Você é mestre da magia de sangue"],
      mechanic: [
        <>
          Pode fundir os quatro <strong>Elementos</strong> básicos e manipular vida, mas gasta{" "}
          <strong>Vida</strong> ao investir em fazê-lo
        </>,
      ],
    },
    wizard: {
      lifeDie: 4,
      name: "Mago",
      theme: ["A sua magia é instável tem resultados estranhos quando você perde o seu foco"],
      mechanic: [
        <>
          Quando perde o <strong>Foco</strong>, pode fazer suas magias não falharem. No lugar, elas
          se tornam imprevisíveis, tendo os pontos aleatórios nas <strong>Disciplinas</strong>
        </>,
      ],
    },
    cleric: {
      lifeDie: 6,
      name: "Clérigo",
      theme: ["Adora uma divindade. Ele interfere nos momentos de necessidade para protegê-lo"],
      mechanic: [
        <>
          Em momentos de necessidade, você pode pedir por uma intervenção e, se você tem sido um bom
          súdito, seu deus pode lhe ajudar com cura de 1 <strong>Dado de Vida</strong>, acalmar
          emoções, efeitos mágicos simples e outros. Entretanto, quando isso acontece você perde{" "}
          <strong>Aptidão</strong>
        </>,
      ],
    },
    warlock: {
      lifeDie: 6,
      name: "Bruxo",
      theme: ["Realizou um pacto com uma entidade. Agrade o seu senhor e ganhe recompensas"],
      mechanic: [
        "A entidade irá ocasionalmente pedir algo e você decide se aceita, ganhando bônus temporários a depender do pedido. O mestre decide a frequência",
      ],
    },
    paladin: {
      lifeDie: 8,
      name: "Paladino",
      theme: [
        "Pode usufruir de sua conexão com o mundo ao seu redor e fazer juramentos. Esses juramentos devem lhe afetar. Em troca, você fortalece aqueles ao seu redor",
      ],
      mechanic: [
        <>
          Dependendo da força do juramento, recebe uma redução de <strong>Aptidão</strong> que não
          pode ser removida e concede esse valor em uma estatística para todos seus aliados não
          paladinos próximos como uma aura. Quebrar um juramento desfaz a aura e reduz a sua{" "}
          <strong>Vida</strong> máxima em um <strong>Dado de Vida</strong>
          permanentemente
        </>,
      ],
    },
    druid: {
      lifeDie: 8,
      name: "Druida",
      theme: [
        "Pode criar um laço com uma criatura irracional amistosa e adquirir uma de suas características físicas ou sensoriais, mas também está ligado a sua força vital",
      ],
      mechanic: [
        <>
          Ao ficar um tempo com a criatura, você pode criar ou romper um laço. A criatura possui as
          mesmas estatísticas e <strong>Vida</strong> que você e pode atacar no seu lugar. Se a
          criatura sofre <strong>Dano</strong>, você também sofre. A força da ligação é proporcional
          a proximidade entre vocês
        </>,
      ],
    },
    fighter: {
      lifeDie: 10,
      name: "Guerreiro",
      theme: [
        "Pode momentaneamente agir mais rápido que o próprio corpo acompanha. Entretanto, precisa de tempo para se recuperar",
      ],
      mechanic: [
        "Após o seu turno, pode agir novamente na mesma rodada, mas passa a próxima rodada sem agir",
      ],
    },
    rogue: {
      lifeDie: 10,
      name: "Ladino",
      theme: ["Aposta no seu próprio destino, ganhando bônus ou penalidade no resultado"],
      mechanic: [
        <>
          Uma vez por <strong>Turno</strong>, aposta no resultado de suas{" "}
          <strong>Habilidades</strong>. A depender do resultado, aumenta ou diminui{" "}
          <strong>Aptidão</strong>. O valor é de acordo com o risco e dura até o final do seu
          próximo <strong>Turno</strong>
        </>,
      ],
    },
    barbarian: {
      lifeDie: 12,
      name: "Bárbaro",
      theme: [
        "Capaz de realizar gritos de fúria que ecoam pelo seu corpo, alterando suas propriedades",
      ],
      mechanic: [
        <>
          Com seu grito, inverte <strong>Ataque</strong> e <strong>Esquiva</strong>,{" "}
          <strong>Dano</strong> e <strong>Defesa</strong>
        </>,
      ],
    },
    monk: {
      lifeDie: 12,
      name: "Monge",
      theme: [
        "Através da meditação, despertou a habilidade de acessar a Essência e melhorar o próprio corpo ",
      ],
      mechanic: [
        <>
          Sempre que você falhar em um <strong>Teste</strong>, pode escolher ter sucesso no lugar.
          Sempre que algo no combate não lhe agradar, pode garantir o valor necessário ou causar o
          seu <strong>Dano</strong> total. Quando você faz isso, você não pode usar o que acabou de
          melhorar por um tempo e seu valor será 0. A quantidade de Turnos se recuperando varia de 1
          a 4, dependendo de quão grande foi a diferença do era pra acontecer e que você fez
        </>,
      ],
    },
  },
  infoBoxLong: { theme: "Tema", mechanic: "Mecânica" },
};
