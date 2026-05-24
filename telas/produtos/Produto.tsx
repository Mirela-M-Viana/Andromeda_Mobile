import React, { useState } from "react";
import { View, Image, Modal, TouchableOpacity, ScrollView, Text } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

import TextoPadrao from "../../componentes/TextoPadrao";
import styles from "./estilosProdutos";

export default function Produto({
  item: { id, nome, imagem, preco, descricao, detalhes },
}: any) {
  const [statusModal, acaoAbreFecha] = useState(false);
  const [favoritado, setFavoritado] = useState(false);

  return (
    <View>

      {/* ===== CARD DO PRODUTO ===== */}
      <Card mode="elevated" style={styles.card}>

        <Card.Cover source={imagem} style={styles.imagem} />

        <Card.Content style={styles.infoContainer}>

          <Text style={styles.nomeProduto}>{nome}</Text>
          <Text style={styles.descricao}>{descricao}</Text>

          {/* Preço no card — Text nativo para garantir o estilo */}
          <Text style={styles.preco}>R$ {preco}</Text>

          <View style={styles.botoesContainer}>

            <TouchableOpacity
              style={styles.botaoDetalhes}
              onPress={() => acaoAbreFecha(true)}
            >
              <Text style={styles.textoBotao}>
                <Ionicons name="list" size={14} color="#fff" /> Detalhes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.botaoFavorito,
                favoritado && styles.botaoFavoritoAtivo,
              ]}
              onPress={() => setFavoritado(!favoritado)}
            >
              <Ionicons
                name={favoritado ? "heart" : "heart-outline"}
                size={20}
                color={favoritado ? "rgb(141, 111, 170)" : "rgb(141, 111, 170)"}
              />
              <Text style={[styles.textoFav, favoritado && styles.textoFavAtivo]}>
                {favoritado ? "Favoritado" : "Favoritar"}
              </Text>
            </TouchableOpacity>

          </View>
        </Card.Content>
      </Card>

      {/* ===== MODAL ===== */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={statusModal}
        onRequestClose={() => acaoAbreFecha(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>

            <TouchableOpacity
              onPress={() => acaoAbreFecha(false)}
              style={styles.botaoModal}
            >
              <Ionicons name="close" size={28} color="rgb(141, 111, 170)" />
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>

              {/* Título do modal — Text nativo */}
              <Text style={styles.modalNome}>{nome}</Text>

              <Image
                source={imagem}
                resizeMode="contain"
                style={styles.ImagemModal}
              />

              <Text style={styles.descProduto}>{descricao}</Text>
              <Text style={styles.modalDetalhes}>{detalhes}</Text>

              {/* Preço do modal — Text nativo */}
              <Text style={styles.precoProduto}>R$ {preco}</Text>

            </ScrollView>
          </View>
        </View>
      </Modal>

    </View>
  );
}