const React = require("react");

module.exports.content = {
  title: "Defina os Pontos de Atributo",
  discipline: {
    name: "Atributo",
    points: [
      <>
        O valor de um <strong>Atributo</strong> define como você é. Cada ponto em um Atributo
        concede +1 para as <strong>Habilidades</strong> dele
      </>,
      <>
        <strong>Talentos</strong> gerais tem certos <strong>Atributos</strong> como pré-requisito
      </>,
      <>
        0 - Abaixo do comum 1 - Normal de uma pessoa 2 - bom 3 - Ótimo 4 - Especialista 5 -
        Impressionante
      </>,
    ],
  },
  disciplines: {
    intelligence: {
      name: "Inteligência",
      infoBoxLong: [
        "Impacta na sua memória",
        <>
          <strong>Raciocínio</strong>
        </>,
        <>
          <strong>História</strong>
        </>,
      ],
    },
    strength: {
      name: "Força",
      infoBoxLong: [
        "Impacta no peso que você pode carregar",
        <>
          <strong>Atletismo</strong>
        </>,
        <>
          <strong>Intimidação</strong>
        </>,
      ],
    },
    charisma: {
      name: "Carisma",
      infoBoxLong: [
        "Impacta na sua interação com os outros",
        <>
          <strong>Improvisação</strong>
        </>,
        <>
          <strong>Intuição</strong>
        </>,
      ],
    },
    constitution: {
      name: "Constituição",
      infoBoxLong: [
        "Impacta na sua resistência à adversidades",
        <>
          <strong>Sobrevivência</strong>
        </>,
        <>
          <strong>Robustez</strong>
        </>,
      ],
    },
    dexterity: {
      name: "Destreza",
      infoBoxLong: [
        "Impacta no seu alcance a distância",
        <>
          <strong>Leveza</strong>
        </>,
        <>
          <strong>Furtividade</strong>
        </>,
      ],
    },
    wisdom: {
      name: "Sabedoria",
      infoBoxLong: [
        "Impacta nos seus sentidos",
        <>
          <strong>Natureza</strong>
        </>,
        <>
          <strong>Percepção</strong>
        </>,
      ],
    },
  },
};
