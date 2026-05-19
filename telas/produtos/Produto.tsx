import React, { useState } from "react";
import { Card } from "react-native-paper";
import {
  View,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "./estilosProdutos";

import TextoPadrao from "../../componentes/TextoPadrao";
import CardActions from "react-native-paper/lib/typescript/components/Card/CardActions";

export default function Produtos({
  item: { nome, descricao, preco, imagem },
}: any) {
  const [statusModal, acaoAbreFecha] = useState(false);

  return (
    <>
      <Card style={styles.card}>
        <Card.Cover source={imagem} style={styles.imagem} />

        <Card.Actions>
          <TouchableOpacity
            style={styles.botaoModal}
            onPress={() => acaoAbreFecha(true)}
          >
            <TextoPadrao style={styles.textoBotao}>
              <Ionicons name="eye" size={12} color="#000000" />
              Ver detalhes
            </TextoPadrao>
          </TouchableOpacity>
        </Card.Actions>

        <View style={styles.infoContainer}>
          <TextoPadrao style={styles.nomeProduto}>{nome}</TextoPadrao>

          <TextoPadrao style={styles.descricao}>{descricao}</TextoPadrao>

          <TextoPadrao style={styles.preco}>R$ {preco}</TextoPadrao>

          <View style={styles.botoesContainer}>
            <TouchableOpacity style={styles.botaoComprar}>
              <TextoPadrao style={styles.textoBotao}>Comprar</TextoPadrao>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoFavorito}>
              <TextoPadrao style={styles.textoFav}>Favoritar</TextoPadrao>
            </TouchableOpacity>
          </View>
        </View>
      </Card>

      {/* Modal Produtos */}
      <Modal animationType="slide" transparent={true} visible={statusModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <TextoPadrao style={styles.nomeProduto}>{nome}</TextoPadrao>

            <TextoPadrao style={styles.descProduto}>{descricao}</TextoPadrao>

            <TextoPadrao style={styles.precoProduto}>R$ {preco}</TextoPadrao>

            <Image
              source={imagem}
              resizeMode="contain"
              style={styles.ImageModal}
            />

            <TouchableOpacity
              onPress={() => acaoAbreFecha(false)}
              style={styles.botaoModal}
            >
              <Ionicons name="close" size={30} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
