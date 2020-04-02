const portuguese = {
  // components
  naviBar: "ESSENCIA",
  membersBar: "Mestre",
  returnMenu: "Voltar",

  // pages
  login: {
    title: "ESSENCIA",
    button: {
      signIn: "Entrar",
      signUp: "Cadastrar"
    },
    textBox: [
      "Bem Vindo à ESSENCIA!",
      "Um sistema de RPG moderno, simples e tático",
      "Domine o combate, use as habilidades e crie suas próprias magias. O limite é a suacriatividade nesse jogo de interpretação"
    ],
    label: {
      nickName: "Usuário",
      email: "E-mail",
      password: "Senha"
    }
  },
  dashboard: {
    title: "ESSENCIA",
    button: {
      player: "Jogador",
      GM: "Mestre",
      newGame: "Novo"
    },
    textBox: [
      "Como Jogador, entre em um jogo que você foi convidado.",
      "Como Mestre, cria suas próprias aventuras e convide jogadores."
    ],
    returnMenu: {
      player: "Selecione o Jogo",
      GM: "Selecione o Jogo"
    }
  },
  playerGames: "Você ainda não participa de nenhum jogo.",
  GMGames: "Você ainda não criou nenhuma jogo.",
  newGame: {
    label: "Nome",
    button: "Criar"
  },

  // CharCreation
  raceSelection: {
    returnMenu: "Escolha a Raça",
    infoLongSingle: {
      title: "Human",
      texts: ["Descrição do que é ser dessa raça", "Você fala o idioma de sua raça e comum."]
    },
    button: {
      races: ["Humano", "Anão", "Elfo", "Halfling", "Mestiço"],
      next: "Próximo"
    }
  },
  // GM
  GMPanel: {
    button: {
      management: "Gerenciamento",
      encounter: "Encontro",
      rules: "Regras Mestre",
      tests: "Testes",
      tools: "Ferramentas"
    }
  },
  management: {
    returnMenu: "Gerenciamento",
    button: {
      manage: "Gerenciar",
      add: "Adicionar"
    },
    label: "Notas Gerais",
    textArea: "Notas da campanha..."
  },
  newPlayer: {
    returnMenu: "Adicionar Jogador",
    label: "Nome",
    button: "Criar"
  }

  // Player
};

export default portuguese;
