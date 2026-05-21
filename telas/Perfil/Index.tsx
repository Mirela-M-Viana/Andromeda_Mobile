import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextoPadrao from "../../componentes/TextoPadrao";
import styles from "./estilosPerfil";

export default function Index() {

  // Variável de estado: câmera traseira ou frontal
  const [facing, setFacing] = useState<CameraType>('back');

  // Variável de estado: permissões da câmera
  const [permission, requestPermission] = useCameraPermissions();

  // Se as permissões ainda não foram verificadas, retorna vazio
  if (!permission) {
    return <View />;
  }

  // Se o usuário ainda não concedeu permissão, exibe botão para pedir
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <TextoPadrao style={styles.message}>
          Precisamos da sua autorização para exibir a câmera
        </TextoPadrao>
        <TouchableOpacity onPress={requestPermission}>
          <TextoPadrao>Permitir</TextoPadrao>
        </TouchableOpacity>
      </View>
    );
  }

  // Função que alterna entre câmera frontal e traseira
  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>

      {/* ===== CÂMERA ===== */}
      <CameraView facing={facing} style={styles.camera}>
        <View style={styles.cameraContainer}>
          <TouchableOpacity
            style={styles.cameraVirarBotao}
            onPress={toggleCameraFacing}>
            <Ionicons name="reload" size={30} color="purple" />
          </TouchableOpacity>
        </View>
      </CameraView>

      {/* ===== FORMULÁRIO DE DADOS DO USUÁRIO ===== */}
      <Card mode='elevated' style={styles.cardContainer}>
        <Card.Content>

          <TextoPadrao style={styles.text}>Nome completo</TextoPadrao>
          <TextInput
            style={styles.input}
            placeholder="Seu nome aqui"
          />

          <TextoPadrao style={styles.text}>E-Mail</TextoPadrao>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            keyboardType="email-address"
          />

          <TextoPadrao style={styles.text}>WhatsApp</TextoPadrao>
          <TextInput
            style={styles.input}
            placeholder="(11) 99999-0000"
            keyboardType="numeric"
          />

        </Card.Content>
      </Card>

    </View>
  );
}