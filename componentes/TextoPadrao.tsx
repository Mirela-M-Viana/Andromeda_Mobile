import React from "react";
import { Text, StyleSheet } from "react-native";

// Aceita 'children' como texto simples OU como JSX (ex: <Text> aninhado)
export default function TextoPadrao({ children, estiloEspecifico }: any) {
  return (
    <Text style={[estilos.padrao, estiloEspecifico]}>
      {children}
    </Text>
  );
}

const estilos = StyleSheet.create({
  padrao: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 20,
    color: "#fff",
  }
});