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
        backgroundColor: "#ffffff",
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    categoriaTexto: {
        color: "#FFF",
        fontWeight: "bold",
    },
    card: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#FFF",
        borderRadius: 25,
        marginBottom: 25,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
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
    // Nome usado no CARD
    nomeProduto: {
        fontSize: 16,
        fontWeight: "bold",
        color: "purple",
    },
    descricao: {
        fontSize: 15,
        color: "#666",
        lineHeight: 22,
        marginBottom: 15,
    },
    descProduto: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
        marginTop: 10,
    },
    preco: {
        fontSize: 22,
        color: "#7B2FF7",
        fontWeight: "bold",
        marginBottom: 15,
    },
    botoesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    botaoComprar: {
        backgroundColor: "#a9a9a9",
        width: "48%",
        paddingVertical: 12,
        borderRadius: 15,
        alignItems: "center",
        borderColor: "#000000",
        borderWidth: 1,
        marginTop: 15,
    },
    botaoFavorito: {
        backgroundColor: "#ffffff",
        width: "48%",
        paddingVertical: 12,
        borderRadius: 15,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#000000",
        marginTop: 15,
    },
    // Botão "Detalhes" dentro do Card (abre o modal)
    botaoDetalhes: {
        backgroundColor: "purple",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 15,
        alignItems: "center",
        marginTop: 5,
    },
    textoBotao: {
        color: "white",
        fontSize: 14,
    },
    textoFav: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 15,
    },

    // ===== MODAL =====

    // Fundo escurecido atrás do modal
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    // Caixa branca do modal
    modal: {
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: "80%",
    },
    // Nome do produto exibido no topo do modal
    modalNome: {
        fontSize: 20,
        fontWeight: "bold",
        color: "purple",
        marginBottom: 8,
        textAlign: "center",
    },
    // Imagem grande dentro do modal
    ImagemModal: {
        width: "100%",
        height: 220,
        alignSelf: "center",
        marginVertical: 10,
    },
    // Texto de detalhes completos dentro do modal
    modalDetalhes: {
        fontSize: 14,
        color: "#333",
        lineHeight: 22,
        textAlign: "justify",
        marginBottom: 20,
    },
    // Preço dentro do modal
    precoProduto: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#7B2FF7",
        marginTop: 15,
    },
    // Botão fechar (X) do modal
    botaoModal: {
        position: "absolute",
        top: 10,
        right: 10,
    },
});

export default estilosProdutos;
