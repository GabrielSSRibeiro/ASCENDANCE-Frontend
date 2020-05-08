// components
module.exports.naviBar = "ESSENCIA";
module.exports.membersBar = "Mestre";
module.exports.returnMenu = "Voltar";
module.exports.progressBar = [
  { name: "Raça", previous: "Cancelar", next: "Seguinte" },
  { name: "Origem", previous: "Anterior", next: "Seguinte" },
  { name: "Classe", previous: "Anterior", next: "Seguinte" },
  { name: "Multiclasse", previous: "Anterior", next: "Seguinte" },
  { name: "Disciplinas", previous: "Anterior", next: "Seguinte" },
  { name: "Defensivo", previous: "Anterior", next: "Seguinte" },
  { name: "Ofensivo", previous: "Anterior", next: "Seguinte" },
  { name: "Passado", previous: "Anterior", next: "Seguinte" },
  { name: "Características", previous: "Anterior", next: "Seguinte" },
  { name: "Tendência", previous: "Anterior", next: "Seguinte" },
  { name: "Atributos", previous: "Anterior", next: "Seguinte" },
  { name: "Equipamento", previous: "Anterior", next: "Seguinte" },
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
      "Você fala o idioma de sua raça e comum.",
      "Não afeta as estatísticas do jogo.",
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
    halfling: {
      name: "Halfling",
      infoBoxLong: ["Descrição do que é ser dessa raça"],
    },
    hybrid: {
      name: "Mestiço",
      infoBoxLong: ["Descrição do que é ser dessa raça"],
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
  notFound: "Usuário não encontrado.",
  alreadyIn: "Usuário já está no jogo.",
};

// Player
