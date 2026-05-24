// Componente de botão reutilizável com ícone e texto
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {
  texto: string;           // Texto exibido no botão
  icone?: string;          // Nome do ícone Ionicons (opcional)
  onPress: () => void;     // Função chamada ao pressionar
  variante?: "escuro" | "dourado"; // Estilo do botão
};

export default function BotaoPadrao({
  texto,
  icone,
  onPress,
  variante = "escuro",
}: Props) {
  const estilo = variante === "dourado" ? estilos.botaoDourado : estilos.botaoEscuro;
  const corTexto = variante === "dourado" ? "#000000" : "#C9A96E";

  return (
    <TouchableOpacity style={[estilos.base, estilo]} onPress={onPress}>
      {/* Ícone opcional à esquerda do texto */}
      {icone && <Ionicons name={icone} size={18} color={corTexto} />}
      <Text style={[estilos.texto, { color: corTexto }]}>{texto}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    paddingVertical: 16,
    gap: 10,
  },
  // Variante escura: fundo roxo-noite com texto dourado
  botaoEscuro: {
    backgroundColor: "rgb(71, 33, 114)",
    elevation: 4,
    shadowColor: "#1A0A2E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  // Variante dourada: fundo dourado com texto escuro
  botaoDourado: {
    backgroundColor: "#C9A96E",
    borderRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 10,
  },
  texto: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
});
