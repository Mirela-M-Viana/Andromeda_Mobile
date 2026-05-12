import React from "react";
import { StyleSheet } from "react-native";

const estilosProdutos = StyleSheet.create({
    corFundo: {
        flex: 1,
        backgroundColor: "#2A1245",
        paddingTop: 40,
        paddingBottom: 50,
    },

    titulo: {
        fontFamily: "Regular",
        fontSize: 32,
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 20,
        letterSpacing: 1,
    },

    card: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#F3EEFF",
        borderRadius: 25,
        marginBottom: 30,
        padding: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,

        elevation: 10,
    },

    nomeProduto: {
        fontFamily: "Regular",
        color: "#5E17EB",
        fontSize: 24,
        marginTop: 12,
        marginBottom: 6,
        textAlign: "center",
    },

    descProduto: {
        fontFamily: "Padrao",
        color: "#5B4B73",
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
        marginBottom: 15,
    },

    imagem: {
        width: "100%",
        height: 260,
        borderRadius: 20,
        alignSelf: "center",
        resizeMode: "cover",
    },

    imagemModal: {
        width: "75%",
        height: "50%",
        borderRadius: 25,
        alignSelf: "center",
        marginBottom: 20,
    },

    imagemSlider: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        resizeMode: "cover",
    },

    modal: {
        backgroundColor: "#F3EEFF",
        width: "85%",
        height: "75%",
        borderRadius: 30,
        padding: 20,
        borderWidth: 3,
        borderColor: "#7B2FF7",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,

        elevation: 12,
    },

    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },

    botaoModal: {
        alignSelf: "flex-end",
        backgroundColor: "#7B2FF7",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },

    botao: {
        width: "45%",
        backgroundColor: "#7B2FF7",
        paddingVertical: 12,
        borderRadius: 15,
        alignSelf: "center",

        shadowColor: "#7B2FF7",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,

        elevation: 6,
    },

    botaoFav: {
        backgroundColor: "#E7DBFF",
        borderWidth: 2,
        borderColor: "#7B2FF7",
    },

    textoBotao: {
        fontFamily: "Padrao",
        width: "100%",
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold",
    },

    container: {
        flex: 1,
    },

    page: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default estilosProdutos;