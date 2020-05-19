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
      id: "5e80a01a-75bb-4632-86d5-fa83953276e3",
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
      id: "223d1dcb-8828-4f4a-a936-7d9832c91a17",
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
      id: "0839e1e4-da98-4f30-a09d-c226c9070aca",
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
      id: "1de4ffc4-feff-4539-b0e8-fc391633466d",
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
      id: "37b1eaf8-7d28-4d48-8eb4-f8bc45d23b80",
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
