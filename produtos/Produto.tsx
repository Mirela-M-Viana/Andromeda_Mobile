import React, { useState } from "react";
import { View, Image, Modal, TouchableOpacity, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';

import TextoPadrao from "../../componentes/TextoPadrao";
import styles from "./estilosProdutos";

export default function Produto({ item: { id, nome, imagem, preco, descricao, detalhes } }: any) {

  // Controla se o modal está aberto ou fechado
  const [statusModal, acaoAbreFecha] = useState(false);

  return (
    <View>

      {/* ===== CARD DO PRODUTO ===== */}
      <Card mode='elevated' style={styles.card}>
        <Card.Content>
          <TextoPadrao style={styles.nomeProduto}>{nome}</TextoPadrao>
          <TextoPadrao style={styles.descricao}>{descricao}</TextoPadrao>
          <TextoPadrao style={styles.preco}>R$ {preco}</TextoPadrao>
        </Card.Content>
        <Card.Cover source={imagem} style={styles.imagem} />
        <Card.Actions>
          {/* botaoDetalhes → abre o modal. NÃO use botaoModal aqui */}
          <TouchableOpacity
            style={styles.botaoDetalhes}
            onPress={() => acaoAbreFecha(true)}>
            <TextoPadrao style={styles.textoBotao}>
              <Ionicons name="list" size={12} color="white" /> Detalhes
            </TextoPadrao>
          </TouchableOpacity>
        </Card.Actions>
      </Card>

      {/* ===== MODAL COM DETALHES DO PRODUTO ===== */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={statusModal}>

        <View style={styles.modalContainer}>
          <View style={styles.modal}>

            {/* Botão fechar (X) — posição absolute no canto superior direito */}
            <TouchableOpacity
              onPress={() => acaoAbreFecha(false)}
              style={styles.botaoModal}>
              <Ionicons name="close" size={30} color="purple" />
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>

              {/* Nome do produto no modal — usa modalNome, não nomeProduto */}
              <TextoPadrao style={styles.modalNome}>{nome}</TextoPadrao>

              {/* Imagem grande */}
              <Image
                source={imagem}
                resizeMode="contain"
                style={styles.ImagemModal}
              />

              {/* Descrição curta centralizada */}
              <TextoPadrao style={styles.descProduto}>{descricao}</TextoPadrao>

              {/* Detalhes completos — usa modalDetalhes */}
              <TextoPadrao style={styles.modalDetalhes}>{detalhes}</TextoPadrao>

              {/* Preço dentro do modal */}
              <TextoPadrao style={styles.precoProduto}>R$ {preco}</TextoPadrao>

            </ScrollView>
          </View>
        </View>
      </Modal>

    </View>
  );
}
