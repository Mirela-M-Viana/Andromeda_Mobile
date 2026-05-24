import React from "react";
const lista_produtos = {
  itens: {
    titulo: "Veja nossos produtos!",
    lista: [

       {
        id: 1,
        nome: "Andrômeda Solitaire",
        descricao: "Modelo sofisticado com detalhes elegantes.",
        preco: "799,99",
        detalhes: "Anel solitário elegante em acabamento prateado polido, com design clássico e sofisticado. A peça possui aro fino e delicado, destacando uma pedra central redonda de brilho intenso, presa por seis garras que valorizam ainda mais sua luminosidade.",
        categoria: "Anéis",
        imagem: require("../../assets/img/AnelPrata01.jpg"),
      },
      {
        id: 2,
        nome: "Brinco Lumina",
        descricao: "Um lindo brinco com um pedra brilhante.",
        preco: "900",
        detalhes: "Delicado e sofisticado, o Brinco Lumina traduz elegância em cada detalhe. Seu design minimalista em formato de meia-lua envolve uma pedra brilhante que reflete a luz com suavidade e encanto, criando um visual moderno e atemporal.",
        categoria: "Brincos",
        imagem: require("../../assets/img/BrincoLumina.jpg"),
      },
       {
        id: 3,
        nome: "Brinco Stella",
        descricao: "Modelo dourado premium.",
        preco: "500",
        detalhes: "Inspirado no brilho das estrelas, o Brinco Stella combina modernidade e delicadeza em um design marcante e sofisticado. Com acabamento dourado e uma pedra central luminosa, a peça reflete elegância e personalidade em cada detalhe.",
        categoria: "Brincos",
        imagem: require("../../assets/img/brincoEstrelaDourada.jpg"),
      },
      {
        id: 4,
        nome: "Colar Stella",
        descricao: "Modelo dourado premium com um lindo diamante!.",
        preco: "899,99",
        detalhes: "Delicado e cheio de significado, o Colar Stella foi criado para iluminar seus dias com elegância e brilho. Seu pingente em formato de estrela, com pedra central reluzente, une sofisticação e modernidade em uma peça atemporal.",
        categoria: "Colares",
        imagem: require("../../assets/img/colarEstrelaDourada.jpg"),
      },

     
    ],
  },
};

export default lista_produtos;