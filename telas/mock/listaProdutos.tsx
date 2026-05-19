import React from "react";
const lista_produtos = {
  itens: {
    titulo: "Veja nossos produtos!",
    lista: [
      {
        id: 1,
        nome: "Brinco Lumina",
        descricao: "4pcs. Temos outros modelos e cores.",
        preco: "49,90",
        categoria: "Brincos",
        imagem: require("../../assets/img/BrincoLumina.jpg"),
      },

      {
        id: 2,
        nome: "Brinco Estrela",
        descricao: "Modelo dourado premium.",
        preco: "59,90",
        categoria: "Brincos",
        imagem: require("../../assets/img/brincoEstrelaDourada.jpg"),
      },
      {
        id: 3,
        nome: "Colar Gold",
        descricao: "Modelo dourado premium com um lindo diamante!.",
        preco: "69,90",
        categoria: "Colares",
        imagem: require("../../assets/img/colarEstrelaDourada.jpg"),
      },
      {
        id: 4,
        nome: "Anel Andromeda",
        descricao: "Modelo sofisticado com detalhes elegantes.",
        preco: "80,90",
        categoria: "Anéis",
        imagem: require("../../assets/img/AnelPrata01.jpg"),
      },
    ],
  },
};

export default lista_produtos;