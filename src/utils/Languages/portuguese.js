const React = require("react");

// components
module.exports.naviBar = "ESSENCIA";
module.exports.membersBar = "Mestre";
module.exports.returnMenu = "Voltar";
module.exports.progressBar = [
  { name: "Raça", previous: "Cancelar", next: "Seguinte" },
  { name: "Origem", previous: "Anterior", next: "Seguinte" },
  { name: "Classe", previous: "Anterior", next: "Seguinte" },
  { name: "Disciplinas", previous: "Anterior", next: "Seguinte" },
  { name: "Defensivo", previous: "Anterior", next: "Seguinte" },
  { name: "Ofensivo", previous: "Anterior", next: "Seguinte" },
  { name: "Passado", previous: "Anterior", next: "Seguinte" },
  { name: "Características", previous: "Anterior", next: "Seguinte" },
  { name: "Tendência", previous: "Anterior", next: "Seguinte" },
  { name: "Atributos", previous: "Anterior", next: "Seguinte" },
  { name: "Perfil", previous: "Anterior", next: "Seguinte" },
];

// pages
module.exports.login = {
  title: "ESSENCIA",
  version: "Versão 0.0 - Alfa Fechado",
  button: {
    signIn: "Entrar",
    signUp: "Cadastrar",
  },
  textBox: [
    "Bem Vindo à ESSENCIA!",
    "Um sistema de RPG moderno, simples e tático",
    '"Domine o combate, use as habilidades e crie suas próprias magias. O limite é a suacriatividade nesse jogo de interpretação"',
  ],
  label: {
    nickName: "Usuário",
    email: "E-mail",
    password: "Senha",
  },
  notFound: "Usuário não encontrado.",
  incorrect: "Senha incorreta.",
};

module.exports.dashboard = {
  title: "ESSENCIA",
  button: {
    player: "Jogador",
    GM: "Mestre",
    newGame: "Novo",
  },
  textBox: [
    "Como Jogador, entre em um jogo que você foi convidado.",
    "Como Mestre, cria suas próprias aventuras e convide jogadores.",
  ],
  returnMenu: {
    player: "Selecione o Jogo",
    GM: "Selecione o Jogo",
  },
};
module.exports.playerGames = {
  returnMenu: "Selecione o Jogo",
  noGames: "Você ainda não participa de nenhum jogo.",
  noCharacter: "Sem Personagem",
  inProgress: "Em Progresso",
  level: "Nível",
};
module.exports.gmGames = {
  returnMenu: "Selecione o Jogo",
  noGames: "Você ainda não criou nenhuma jogo.",
};
module.exports.newGame = {
  returnMenu: "Escolha de Nome",
  label: "Nome",
  button: "Criar",
  takenName: "Já existe um jogo com esse nome.",
};

//  CharCreation
module.exports.raceSelection = {
  title: "Escolha a Raça",
  race: {
    name: "Raça",
    infoBoxLong: [
      "O que significa a raça do personagem",
      "Você fala o idioma de sua raça e comum",
      "Não afeta as estatísticas do jogo",
    ],
  },
  races: {
    human: {
      name: "Humano",
      infoBoxLong: ["Descrição do que é ser dessa raça"],
    },
    dwarf: {
      name: "Anão",
      infoBoxLong: ["Descrição do que é ser dessa raça"],
    },
    elf: {
      name: "Elfo",
      infoBoxLong: ["Descrição do que é ser dessa raça"],
    },
    orc: {
      name: "Orc",
      infoBoxLong: ["Descrição do que é ser dessa raça"],
    },
    hybrid: {
      name: "Mestiço",
      infoBoxLong: ["É a combinação de uma das outras com alguma outra raça qualquer"],
    },
  },
};
module.exports.originSelection = {
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
module.exports.classSelection = {
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
          emoções, efeitos mágicos simples e outros. Entretanto, quando isso acontece você recebe{" "}
          <strong>Exaustão</strong>
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
          Dependendo da força do juramento, recebe um valor de <strong>Exaustão</strong> que não
          pode ser removido e concede esse valor em uma estatística para todos seus aliados não
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
          <strong>Habilidades</strong>. A depender do resultado, receba <strong>Exaustão</strong> ou{" "}
          <strong>Inspiração</strong>. O valor é de acordo com o risco e dura até o final do seu
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
          <strong>Dano</strong> e <strong>Defesa</strong>, <strong>Exaustão</strong> e{" "}
          <strong>Inspiração</strong>
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
module.exports.disciplineSelection = {
  title: "Escolha a(s) Disciplina(s)",
  outline: {
    race: "Raça",
    origin: "Origem Mágica",
    class: "Classe",
  },
  discipline: {
    name: "Disciplina",
    points: [
      <>
        O primeiro concede o uso da <strong>Disciplina</strong> Cada ponto seguinte aumenta seu{" "}
        <strong>Poder</strong> mínimo com a <strong>Disciplina</strong> em 10, sem custo extra
      </>,
      <>
        <strong>Poder</strong> é utilizado para determinar a potência de uma <strong>Magia</strong>
      </>,
    ],
    discipline: ["Descrição do que é uma Disciplina e cada uma delas"],
  },
  disciplines: {
    feel: "Sentir",
    create: "Criar",
    change: "Alterar",
    control: "Controlar",
  },
  infoBoxLong: { points: "Uso de Pontos", discipline: "Disciplina" },
};
module.exports.defensiveSpecialty = {
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
module.exports.ofensiveSpecialty = {
  title: "Escolha a Especialidade Ofensiva",
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
module.exports.pastDefinition = {
  title: "Escreva Seu Passado",
  outline: {
    race: "Raça",
    origin: "Origem Mágica",
    class: "Classe",
    defensiveSpecialty: "Especialidade Defensiva",
    ofensiveSpecialty: "Especialidade Ofensiva",
  },
  placeholder:
    "Ex: Ehrazok, era um homem humano já em seus trinta e sete anos. Ele, como muitos já em sua idade, era responsável pela forja de armas. Ehrazok foi treinado na arte curativa por seus compatriotas e no confronto de venenos, por sua bela esposa Barsara...",
  infoBoxLong: {
    title: "Passado",
    texts: [
      "Lorem ipsum dolor",
      "O mestre pode lhe conceder ou retirar pontos iniciais de acordo com seu passado. Converse com ele",
    ],
  },
};
module.exports.characteristicsDefinition = {
  title: "Defina Suas Características",
  characteristics: {
    personality: {
      title: "Personalidade",
      placeholder: "Ex: Agitado, calmo, brincalhão...",
    },
    occupation: {
      title: "Profissão",
      placeholder: "Ex: Caçador, vendedor, ferreiro...",
    },
    goal: {
      title: "Objetivo",
      placeholder: "Ex: Restauras a honra da família, ficar rico...",
    },
    flaw: {
      title: "Defeito",
      placeholder: "Ex: Ganância, bondade, impulsividade...",
    },
  },
  infoBoxLong: {
    title: "Características",
    texts: ["Lorem ipsum dolor"],
  },
};
module.exports.alignmentSelection = {
  title: "Escolha a Sua Tendência",
  alignment: {
    name: "Tendência",
    infoBoxLong: ["Descrever o que é tendência"],
  },
  firstAlignments: {
    lawful: {
      name: "Leal",
      infoBoxLong: ["Descrever o que é essa tendência"],
    },
    neutral: {
      name: "Neutro",
      infoBoxLong: ["Descrever o que é essa tendência"],
    },
    chaotic: {
      name: "Caótico",
      infoBoxLong: ["Descrever o que é essa tendência"],
    },
  },
  secondAlignments: {
    good: {
      name: "Bom",
      infoBoxLong: ["Descrever o que é essa tendência"],
    },
    neutral: {
      name: "Neutro",
      infoBoxLong: ["Descrever o que é essa tendência"],
    },
    evil: {
      name: "Mal",
      infoBoxLong: ["Descrever o que é essa tendência"],
    },
  },
  firstTitle: "Escolha 1 entre as 3 índoles",
  secondTitle: "Escolha 1 entre as 3 atitudes",
};
module.exports.atributesAllocation = {
  title: "Escolha a(s) Disciplina(s)",
  outline: {
    race: "Raça",
    origin: "Origem Mágica",
    class: "Classe",
  },
  discipline: {
    name: "Disciplina",
    points: [
      <>
        O primeiro concede o uso da <strong>Disciplina</strong> Cada ponto seguinte aumenta seu{" "}
        <strong>Poder</strong> mínimo com a <strong>Disciplina</strong> em 10, sem custo extra
      </>,
      <>
        <strong>Poder</strong> é utilizado para determinar a potência de uma <strong>Magia</strong>
      </>,
    ],
    discipline: ["Descrição do que é uma Disciplina e cada uma delas"],
  },
  disciplines: {
    feel: "Sentir",
    create: "Criar",
    change: "Alterar",
    control: "Controlar",
  },
  infoBoxLong: { points: "Uso de Pontos", discipline: "Disciplina" },
};

// GM
module.exports.gmPanel = {
  button: {
    management: "Gerenciamento",
    encounter: "Encontro",
    rules: "Regras Mestre",
    tests: "Testes",
    tools: "Ferramentas",
  },
};
module.exports.management = {
  returnMenu: "Gerenciamento",
  avatar: "foto",
  button: {
    manage: "Gerenciar",
    add: "Adicionar",
  },
  label: "Notas Gerais",
  textArea: "Notas da campanha...",
};
module.exports.newPlayer = {
  returnMenu: "Adicionar Jogador",
  label: "Nome",
  button: "Adicionar",
  notFound: "Usuário não encontrado.",
  alreadyIn: "Usuário já está no jogo.",
};

// Player
