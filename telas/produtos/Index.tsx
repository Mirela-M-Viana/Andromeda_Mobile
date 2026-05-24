import React, { useState } from "react";
import { View, FlatList, TextInput, TouchableOpacity, Text } from "react-native";

import styles from "./estilosProdutos";
import TextoPadrao from "../../componentes/TextoPadrao";
import CadaProduto from "./Produto";
import Icon from "react-native-vector-icons/Feather";

export default function Index({ itens }: any) {
  const [pesquisa, setPesquisa] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const produtosFiltrados = itens.lista.filter((produto: any) => {
    const nomeCorresponde = produto.nome
      .toLowerCase()
      .includes(pesquisa.toLowerCase());
    const categoriaCorresponde =
      categoriaSelecionada === "Todos"
        ? true
        : produto.categoria === categoriaSelecionada;
    return nomeCorresponde && categoriaCorresponde;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTela}>{itens.titulo}</Text>

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
        {["Todos", "Brincos", "Colares", "Anéis"].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoriaBotao,
              categoriaSelecionada === cat && styles.categoriaBotaoAtivo,
            ]}
            onPress={() => setCategoriaSelecionada(cat)}
          >
            <Text
              style={[
                styles.categoriaTexto,
                categoriaSelecionada === cat && styles.categoriaTextoAtivo,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
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
