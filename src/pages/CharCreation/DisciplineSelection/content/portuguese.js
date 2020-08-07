import React from "react";

export const content = {
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
