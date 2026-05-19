import React from "react";
import { Card } from "react-native-paper";
import { View, TouchableOpacity } from "react-native";
import styles from "./estilosProdutos";

import TextoPadrao from "../../componentes/TextoPadrao";

export default function Produtos({
  item: { nome, descricao, preco, imagem },
}: any) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={imagem} style={styles.imagem} />

      <View style={styles.infoContainer}>
        <TextoPadrao style={styles.nomeProduto}>
          {nome}
        </TextoPadrao>

        <TextoPadrao style={styles.descricao}>
          {descricao}
        </TextoPadrao>

        <TextoPadrao style={styles.preco}>
          R$ {preco}
        </TextoPadrao>

        <View style={styles.botoesContainer}>
          <TouchableOpacity style={styles.botaoComprar}>
            <TextoPadrao style={styles.textoBotao}>
              Comprar
            </TextoPadrao>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoFavorito}>
            <TextoPadrao style={styles.textoFav}>
              Favoritar
            </TextoPadrao>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
}