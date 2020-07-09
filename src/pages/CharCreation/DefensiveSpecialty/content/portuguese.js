const React = require("react");

module.exports.content = {
  title: "Escolha a Especialidade Defensiva",
  outline: {
    race: "Raça",
    origin: "Origem Mágica",
    class: "Classe",
  },
  specialty: {
    name: "Especialidade",
    infoBoxLong: [
      <>
        Uma especialidade é algo que você domina e ganha bônus por isso. Você ainda é capaz de usar
        outros equipamento, mas não tem bônus extra já que a utilidade do item se compara a sua
        falta de habilidade com ele
      </>,
      <>
        Também dita possíveis <strong>Talentos</strong> que obterá no futuro
      </>,
    ],
  },
  specialties: {
    shields: {
      name: "Escudos",
      bonuses: [
        <>
          <strong>Movimento</strong> Médio
        </>,
        <>
          <strong>Esquiva</strong> +2
        </>,
        <>
          <strong>Defesa</strong> +1
        </>,
      ],
      feats: [
        <>
          I - Aumenta <strong>Defesa</strong> até próximo turno cada vez que sofre{" "}
          <strong>Dano</strong>
        </>,
        <>
          II - <strong>Aparar</strong> causa <strong>Dano</strong> de volta ao atacante
        </>,
      ],
    },
    lightArmor: {
      name: "Armaduras Leves",
      bonuses: [
        <>
          <strong>Movimento</strong> Longo
        </>,
        <>
          <strong>Esquiva</strong> +3
        </>,
        <>
          <strong>Defesa</strong> +0
        </>,
      ],
      feats: [
        <>
          I - Golpes depois de perder <strong>Foco</strong> tem +5 <strong>Dano</strong>
        </>,
        <>
          II - Golpes depois de usar <strong>Habilidades</strong> tem +5 <strong>Ataque</strong>
        </>,
      ],
    },
    mediumArmor: {
      name: "Armaduras Médias",
      bonuses: [
        <>
          <strong>Movimento</strong> Médio
        </>,
        <>
          <strong>Esquiva</strong> +1
        </>,
        <>
          <strong>Defesa</strong> +2
        </>,
      ],
      feats: [
        <>
          I - +3 <strong>Dano</strong> para cada <strong>Magia</strong> ativa
        </>,
        <>
          II - Recupera <strong>Exaustão</strong> quando gasta todos os{" "}
          <strong>Dados de Vida</strong>
        </>,
      ],
    },
    heavyArmor: {
      name: "Armaduras Pesadas",
      bonuses: [
        <>
          <strong>Movimento</strong> Curto
        </>,
        <>
          <strong>Esquiva</strong> +0
        </>,
        <>
          <strong>Defesa</strong> +3
        </>,
      ],
      feats: [
        <>I - Não pode ser empurrando enquanto em pé</>,
        <>
          II - Golpes <strong>Críticos</strong> sofridos causam metade do <strong>Dano</strong>
        </>,
      ],
    },
  },
  infoBoxLong: { bonuses: "Bônus", feats: "Talentos" },
};
