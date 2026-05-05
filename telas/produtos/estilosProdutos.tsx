import React from "react";
import { StyleSheet } from "react-native";

const estilosProdutos = StyleSheet.create({
    corFundo: {
        backgroundColor: 'rgb(71, 33, 114)',
        paddingBottom: 50,
        paddingTop: 40,
    },
    titulo: {
        fontFamily: 'Regular',
        fontSize: 30,
        color: "white",
        textAlign: "center",
        width: "100%",
    },
    card: {
        width: "90%",
        margin: 50,
        alignSelf: "center",
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "#CCCCFF",
    },
    nomeProduto: {
        fontFamily: 'Regular',
        color: "purple",
        fontSize: 22,
        paddingBottom: 5,
    },
    descProduto: {
        fontFamily: 'Padrao',
        color: "purple",
        fontSize: 16,
        paddingBottom: 10,
    },
    imagem: {
        width: "95%",
        alignSelf: "center",
    },
    imagemModal: {
        width: '60%', 
        height: '60%',
        borderRadius: 25, 
        alignSelf: "center"
    },
    imagemSlider: {
        height: '100%', 
        alignSelf: "center"
    },
    modal: {
        backgroundColor: "#E5E6FA",
        width: "80%",
        height: "70%",
        borderWidth: 6,
        borderColor: "#6600CC",
        paddingLeft: 10,
        paddingRight: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:  'center',
    },
    botaoModal: {
       left: "85%",
       paddingBottom: 10,
    },
    botao: {
        width: "30%",
        backgroundColor: "#6600CC",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 2,
        paddingBottom: 5,
    },
    botaoFav: {
        borderColor: "#6600CC",
        backgroundColor: "#CCCCFF",
    },
    textoBotao: {
        fontFamily: 'Padrao',
        width: "100%",
        fontSize: 16,
        color: "white",
        textAlign: "center",
    },
    container: {
        flex: 1,
      },
      page: {
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default estilosProdutos;