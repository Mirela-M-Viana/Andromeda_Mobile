import { StyleSheet } from "react-native";

const estilosProdutos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(71, 33, 114)",
    paddingTop: 80,
  },
  tituloTela: {
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Regular",
    fontWeight: "bold",
  },
  searchContainer: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 55,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  categorias: {
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 15,
  },

  categoriaBotao: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },
  //categoria selecionada se destaca
  categoriaBotaoAtivo: {
    backgroundColor: "#ffffff",
  },
  categoriaTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 13,
  },
  // texto da categoria ativa fica roxo (contraste com fundo branco)
  categoriaTextoAtivo: {
    color: "#400940",
  },
  card: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#FFF",
    borderRadius: 25,
    marginBottom: 25,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  imagem: {
    width: "100%",
    height: 240,
  },
  infoContainer: {
    padding: 15,
  },
  nomeProduto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#35094e",
    marginBottom: 6,
    marginTop: 10,
    textAlign: "center"
  },
  descricao: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 8,
    textAlign: "center",    
  },
  preco: {
    fontSize: 20,
    color: "#080211",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  },
  // Detalhes ocupa metade
  botaoDetalhes: {
    backgroundColor: "rgb(141, 111, 170)",
    flex: 1,
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  //detalhes
  textoBotao: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  // Favoritar ocupa a outra metade
  botaoFavorito: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "rgb(125, 105, 145)",
    gap: 6,
  },
  // estado ativo do favorito
  botaoFavoritoAtivo: {
    backgroundColor: "#ffffff",
    borderColor: "rgb(125, 105, 145)",
  },
  textoFav: {
    color: "#rgb(141, 111, 170)",
    fontWeight: "bold",
    fontSize: 14,
  },
  textoFavAtivo: {
    color: "rgb(141, 111, 170)",
  },

  // ===== MODAL =====
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: "85%",
  },
  modalNome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
    textAlign: "center",
    paddingTop: 25,
  },
  ImagemModal: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
  descProduto: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 8,
    fontWeight: "bold"
  },

  modalDetalhes: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 12,
  },

  precoProduto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#461298",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  // X maior, com área de toque e zIndex para ficar acima do ScrollView
  botaoModal: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
    padding: 4,
    backgroundColor: "#dedada5b",
    borderRadius: 10
  },
});

export default estilosProdutos;