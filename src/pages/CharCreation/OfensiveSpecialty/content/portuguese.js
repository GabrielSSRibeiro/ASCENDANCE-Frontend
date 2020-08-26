const React = require("react");

module.exports.content = {
  title: "Escolha a Especialidade Ofensiva",
  initialWeapon: "Arma Inicial",
  outline: {
    race: "Raça",
    origin: "Origem Mágica",
    class: "Classe",
    defensiveSpecialty: "Especialidade Defensiva",
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
    piercingWeapons: {
      name: "Armas Perfuração",
      bonuses: [
        <>
          <strong>Iniciativa</strong> Rápida
        </>,
        <>
          <strong>Ataque</strong> +4
        </>,
        <>
          <strong>Dano</strong> +3
        </>,
      ],
      feats: [
        <>
          I - Todos os seus golpes ignoram <strong>Defesa</strong> quando com apenas 1 de{" "}
          <strong>Vida</strong>
        </>,
        <>
          II - Golpes consecutivos no mesmo turno causam mais <strong>Dano</strong>
        </>,
      ],
    },
    slashingWeapons: {
      name: "Armas Corte",
      bonuses: [
        <>
          <strong>Iniciativa</strong> Média
        </>,
        <>
          <strong>Ataque</strong> +3
        </>,
        <>
          <strong>Dano</strong> +4
        </>,
      ],
      feats: [
        <>I - Golpes tem alcance médio</>,
        <>
          II - Ganha <strong>Inspiração</strong> ao matar
        </>,
      ],
    },
    impactWeapons: {
      name: "Armas Impacto",
      bonuses: [
        <>
          <strong>Iniciativa</strong> Lenta
        </>,
        <>
          <strong>Ataque</strong> +1
        </>,
        <>
          <strong>Dano</strong> +6
        </>,
      ],
      feats: [
        <>I - Seus golpes empurram curto quando acertam</>,
        <>
          II - <strong>Dano</strong> mínimo é 5. Mesmo que não supere a <strong>Defesa</strong>
        </>,
      ],
    },
    longRangeWeapons: {
      name: "Armas Distância",
      bonuses: [
        <>
          <strong>Iniciativa</strong> Lenta
        </>,
        <>
          <strong>Ataque</strong> +1
        </>,
        <>
          <strong>Dano</strong> +4
        </>,
      ],
      feats: [
        <>
          I - Tripla chance de <strong>Crítico</strong> se inimigo esta com <strong>Vida</strong>{" "}
          cheia
        </>,
        <>
          II - Ao ferir, mata inimigos com <strong>Vida</strong> restante menor que seu valor de{" "}
          <strong>Dano</strong>
        </>,
      ],
    },
  },
  infoBoxLong: { bonuses: "Bônus", feats: "Talentos" },
};
