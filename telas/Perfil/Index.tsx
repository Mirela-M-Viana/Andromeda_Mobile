// Tela de Perfil — câmera + formulário de avaliação de produto
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  Modal,
  FlatList,
} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import Ionicons from "react-native-vector-icons/Ionicons";
import TextoPadrao from "../../componentes/TextoPadrao";
import BotaoPadrao from "../../componentes/BotaoPadrao";
import styles from "./estilosPerfil";

// Produtos disponíveis para avaliação
const PRODUTOS = [
  { label: "Andrômeda Solitaire", value: "andromeda_solitaire" },
  { label: "Brinco Lumina",       value: "brinco_lumina" },
  { label: "Brinco Stella",       value: "brinco_stella" },
  { label: "Colar Stella",        value: "colar_stella" },
];

export default function Index() {

  // Câmera: qual lente está ativa e status da permissão
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  // Campos do formulário
  const [nome,     setNome]     = useState("");
  const [email,    setEmail]    = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [produto,  setProduto]  = useState(""); // valor interno selecionado
  const [nota,     setNota]     = useState(0);  // 0 = nenhuma estrela

  // Controla a abertura/fechamento do modal de seleção de joia
  const [modalVisivel, setModalVisivel] = useState(false);

  // Aguarda o hook carregar o status de permissão
  if (!permission) return <View />;

  // Tela de solicitação de permissão da câmera
  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Ionicons name="camera-outline" size={48} color="#C9A96E" style={{ marginBottom: 16 }} />
        <Text style={styles.message}>
          Precisamos da sua autorização para exibir a câmera
        </Text>
        <BotaoPadrao
          texto="Permitir acesso"
          icone="lock-open-outline"
          onPress={requestPermission}
          variante="dourado"
        />
      </View>
    );
  }

  // Alterna entre câmera frontal e traseira
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  // Envia os dados do formulário
  function handleEnviar() {
    // TODO: substituir pelo envio real (API, Firebase, etc.)
    console.log({ nome, email, whatsapp, produto, nota });
  }

  // Retorna o label do produto selecionado (ou placeholder)
  const labelProduto = PRODUTOS.find((p) => p.value === produto)?.label ?? "Selecione uma joia...";

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FAF7F4" }} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerSubtitle}>Avaliação de produto</Text>
        <Text style={styles.headerTitle}>
          Nos mostre sua{" "}
          <Text style={styles.headerAccent}>beleza</Text>
        </Text>
      </View>

      {/* CÂMERA */}
      <View style={styles.cameraWrapper}>
        <CameraView facing={facing} style={styles.camera}>
          <View style={styles.cameraContainer}>

            {/* Botão para virar câmera */}
            <TouchableOpacity style={styles.cameraVirarBotao} onPress={toggleCameraFacing}>
              <Ionicons name="camera-reverse-outline" size={26} color="#FAF7F4" />
            </TouchableOpacity>

            {/* Botão para tirar foto */}
            <BotaoPadrao
              texto="Tirar foto"
              icone="camera"
              onPress={() => {/* TODO: lógica de captura */}}
              variante="dourado"
            />

          </View>
        </CameraView>
      </View>

      {/* FORMULÁRIO */}
      <View style={styles.cardContainer}>

        {/* Nome */}
        <Text style={styles.fieldLabel}>Nome completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome aqui"
          placeholderTextColor="#BFB8AE"
          value={nome}
          onChangeText={setNome}
        />

        {/* E-mail */}
        <Text style={styles.fieldLabel}>E-Mail</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          placeholderTextColor="#BFB8AE"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* WhatsApp */}
        <Text style={styles.fieldLabel}>WhatsApp</Text>
        <TextInput
          style={styles.input}
          placeholder="(11) 99999-0000"
          placeholderTextColor="#BFB8AE"
          keyboardType="phone-pad"
          value={whatsapp}
          onChangeText={setWhatsapp}
        />

        <View style={styles.divider} />

        {/* Seletor de joia — abre o Modal ao tocar */}
        <Text style={styles.fieldLabel}>Joia adquirida</Text>
        <TouchableOpacity style={styles.seletorBotao} onPress={() => setModalVisivel(true)}>
          <Text style={[styles.seletorTexto, !produto && { color: "#BFB8AE" }]}>
            {labelProduto}
          </Text>
          <Ionicons name="chevron-down" size={18} color="#C9A96E" />
        </TouchableOpacity>

        {/* Estrelas de avaliação: 1 a 5 */}
        <Text style={styles.fieldLabel}>Sua nota</Text>
        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setNota(star)}>
              <Ionicons
                name={star <= nota ? "star" : "star-outline"}
                size={30}
                color={star <= nota ? "#C9A96E" : "#D4C9BE"}
              />
            </TouchableOpacity>
          ))}
        </View>

      </View>

      {/* BOTÃO DE ENVIO */}
      <View style={{ marginHorizontal: 20, marginBottom: 32 }}>
        <BotaoPadrao
          texto="Enviar avaliação"
          icone="paper-plane-outline"
          onPress={handleEnviar}
          variante="escuro"
        />
      </View>

      {/* MODAL DE SELEÇÃO DE JOIA
          Abre uma lista nativa sem precisar de biblioteca externa */}
      <Modal
        visible={modalVisivel}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisivel(false)}
      >
        {/* Fundo escurecido — fecha o modal ao tocar fora */}
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisivel(false)}
        >
          {/* Card branco com a lista de opções */}
          <View style={styles.modalCard}>
            <Text style={styles.modalTitulo}>Selecione a joia</Text>

            <FlatList
              data={PRODUTOS}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.modalItem,
                    // Destaca o item atualmente selecionado
                    item.value === produto && styles.modalItemSelecionado,
                  ]}
                  onPress={() => {
                    setProduto(item.value);
                    setModalVisivel(false); // Fecha o modal após selecionar
                  }}
                >
                  <Text style={[
                    styles.modalItemTexto,
                    item.value === produto && styles.modalItemTextoSelecionado,
                  ]}>
                    {item.label}
                  </Text>
                  {/* Ícone de check no item selecionado */}
                  {item.value === produto && (
                    <Ionicons name="checkmark" size={20} color="#C9A96E" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>

    </ScrollView>
  );
}
