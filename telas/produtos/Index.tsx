// import React from "react";
// import { View, FlatList } from "react-native";
// import styles from "./estilosProdutos";

// import TextoPadrao from "../../componentes/TextoPadrao";
// import CadaProduto from "../produtos/Produto"

// export default function Index({itens}:any) {
//     return <View style={styles.container}>
//             <TextoPadrao estiloEspecifico={styles.tituloTela}>{itens.titulo}</TextoPadrao>
//             <FlatList
//                 data={itens.lista}
//                 renderItem={({item})=> <CadaProduto item={item} />}
//                 keyExtractor={itens.lista.id} /*como se fosse um laço de repetição*/
//             />
//     </View>
// }

import React, { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "./estilosProdutos";

import TextoPadrao from "../../componentes/TextoPadrao";
import CadaProduto from "../produtos/Produto";

import Icon from "react-native-vector-icons/Feather";

export default function Index({ itens }: any) {
  const [pesquisa, setPesquisa] = useState("");

  const produtosFiltrados = itens.lista.filter(
    (produto: { nome: string }) =>
      produto.nome
        .toLowerCase()
        .includes(pesquisa.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextoPadrao estiloEspecifico={styles.tituloTela}>
        {itens.titulo}
      </TextoPadrao>

      {/* Barra Pesquisa */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={22} color="#999" />

        <TextInput
          placeholder="Pesquisar produto..."
          style={styles.searchInput}
          value={pesquisa}
          onChangeText={setPesquisa}
        />
      </View>

      {/* Categorias */}
      <View style={styles.categorias}>
        <TouchableOpacity style={styles.categoriaBotao}>
          <TextoPadrao style={styles.categoriaTexto}>
            Brincos
          </TextoPadrao>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoriaBotao}>
          <TextoPadrao style={styles.categoriaTexto}>
            Colares
          </TextoPadrao>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoriaBotao}>
          <TextoPadrao style={styles.categoriaTexto}>
            Anéis
          </TextoPadrao>
        </TouchableOpacity>
      </View>

      {/* Produtos */}
      <FlatList
        data={produtosFiltrados}
        renderItem={({ item }) => (
          <CadaProduto item={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}