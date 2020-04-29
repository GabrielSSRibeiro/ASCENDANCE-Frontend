// components
module.exports.naviBar = "ESSENCIA";
module.exports.membersBar = "Mestre";
module.exports.returnMenu = "Voltar";

// pages
module.exports.login = {
  title: "ESSENCIA",
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
};
module.exports.gmGames = {
  returnMenu: "Selecione o Jogo",
  noGames: "Você ainda não criou nenhuma jogo.",
};
module.exports.newGame = {
  returnMenu: "Escolha de Nome",
  label: "Nome",
  button: "Criar",
};

//  CharCreation
module.exports.raceSelection = {
  returnMenu: "Escolha a Raça",
  races: {
    human: {
      name: "Humano",
      infoBoxLong: ["Descrição do que é ser dessa raça", "Você fala o idioma de sua raça e comum."],
    },
    dwarf: {
      name: "Anão",
      infoBoxLong: ["Descrição do que é ser dessa raça", "Você fala o idioma de sua raça e comum."],
    },
    elf: {
      name: "Elfo",
      infoBoxLong: ["Descrição do que é ser dessa raça", "Você fala o idioma de sua raça e comum."],
    },
    halfling: {
      name: "Halfling",
      infoBoxLong: ["Descrição do que é ser dessa raça", "Você fala o idioma de sua raça e comum."],
    },
    hybrid: {
      name: "Mestiço",
      infoBoxLong: ["Descrição do que é ser dessa raça", "Você fala o idioma de sua raça e comum."],
    },
  },
  next: "Próximo",
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
};

// Player
