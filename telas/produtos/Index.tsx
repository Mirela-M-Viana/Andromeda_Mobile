import React, { useState } from "react";
import { View, FlatList, TextInput, TouchableOpacity } from "react-native";

import styles from "./estilosProdutos";

import TextoPadrao from "../../componentes/TextoPadrao";
import CadaProduto from "../produtos/Produto";

import Icon from "react-native-vector-icons/Feather";

export default function Index({ itens }: any) {
  const [pesquisa, setPesquisa] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  // FILTRO
  const produtosFiltrados = itens.lista.filter((produto: any) => {
    // filtro pesquisa
    const nomeCorresponde = produto.nome
      .toLowerCase()
      .includes(pesquisa.toLowerCase());

    // filtro categoria
    const categoriaCorresponde =
      categoriaSelecionada === "Todos"
        ? true
        : produto.categoria === categoriaSelecionada;

    return nomeCorresponde && categoriaCorresponde;
  });

  return (
    <View style={styles.container}>
      <TextoPadrao estiloEspecifico={styles.tituloTela}>
        {itens.titulo}
      </TextoPadrao>

      {/* PESQUISA */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={22} color="#999" />

        <TextInput
          placeholder="Pesquisar produto..."
          style={styles.searchInput}
          value={pesquisa}
          onChangeText={setPesquisa}
        />
      </View>

      {/* CATEGORIAS */}
      <View style={styles.categorias}>
        <TouchableOpacity
          style={styles.categoriaBotao}
          onPress={() => setCategoriaSelecionada("Todos")}
        >
          <TextoPadrao style={styles.categoriaTexto}>Todos</TextoPadrao>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoriaBotao}
          onPress={() => setCategoriaSelecionada("Brincos")}
        >
          <TextoPadrao style={styles.categoriaTexto}>Brincos</TextoPadrao>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoriaBotao}
          onPress={() => setCategoriaSelecionada("Colares")}
        >
          <TextoPadrao style={styles.categoriaTexto}>Colares</TextoPadrao>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoriaBotao}
          onPress={() => setCategoriaSelecionada("Anéis")}
        >
          <TextoPadrao style={styles.categoriaTexto}>Anéis</TextoPadrao>
        </TouchableOpacity>
      </View>

      {/* LISTA */}
      <FlatList
        data={produtosFiltrados}
        renderItem={({ item }) => <CadaProduto item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
