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
