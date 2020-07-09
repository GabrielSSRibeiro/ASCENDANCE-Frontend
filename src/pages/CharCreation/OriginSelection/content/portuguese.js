const React = require("react");

module.exports.content = {
  title: "Escolha a Origem Mágica",
  outline: {
    race: "Raça",
  },
  origin: {
    name: "Origem",
    infoBoxLong: [
      <>
        Poucas pessoas se destacam com a capacidade de manipular sua <strong>Essência</strong> por
        mais que a tenham
      </>,
      "Você fala o idioma de sua raça e comum",
    ],
  },
  origins: {
    innate: {
      name: "Inata",
      infoBoxLong: [
        "Descrever o que é essa origem",
        <>
          Possui 4 pontos em <strong>Disciplinas</strong> mágicas
        </>,
        <>
          <strong>Dado de Vida</strong> é d4
        </>,
        <>
          Classes são <strong>Feiticeiro</strong> e <strong>Mago</strong>
        </>,
      ],
    },
    granted: {
      name: "Concedida",
      infoBoxLong: [
        "Descrever o que é essa origem",
        <>
          Possui 3 pontos em <strong>Disciplinas</strong> mágicas
        </>,
        <>
          <strong>Dado de Vida</strong> é d6
        </>,
        <>
          Classes são <strong>Clérigo</strong> e <strong>Bruxo</strong>
        </>,
      ],
    },
    nourished: {
      name: "Nutrida",
      infoBoxLong: [
        "Descrever o que é essa origem",
        <>
          Possui 2 pontos em <strong>Disciplinas</strong> mágicas
        </>,
        <>
          <strong>Dado de Vida</strong> é d8
        </>,
        <>
          Classes são <strong>Paladino</strong> e <strong>Druida</strong>
        </>,
      ],
    },
    occasional: {
      name: "Ocasional",
      infoBoxLong: [
        "Descrever o que é essa origem",
        <>
          Possui 1 pontos em <strong>Disciplinas</strong> mágicas
        </>,
        <>
          <strong>Dado de Vida</strong> é d10
        </>,
        <>
          Classes são <strong>Guerreiro</strong> e <strong>Ladino</strong>
        </>,
      ],
    },
    nonexistent: {
      name: "Inexistente",
      infoBoxLong: [
        "Descrever o que é essa origem",
        <>
          Possui 0 pontos em <strong>Disciplinas</strong> mágicas
        </>,
        <>
          <strong>Dado de Vida</strong> é d12
        </>,
        <>
          Classes são <strong>Bárbaro</strong> e <strong>Monge</strong>
        </>,
      ],
    },
  },
};
