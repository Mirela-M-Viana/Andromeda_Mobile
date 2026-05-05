import { Card } from "react-native-paper";
import styles from "./estilosProdutos";

import TextoPadrao from "../../componentes/TextoPadrao";
 
export default function Produto({item:{id,nome,descricao,imagem}}:any) {
    return <Card mode="elevated" style={styles.card}>
                <Card.Content>
                    <TextoPadrao style={styles.nomeProduto}>{nome}</TextoPadrao>
                    <TextoPadrao style={styles.descProduto}>{descricao}</TextoPadrao>
                </Card.Content>
                <Card.Cover  source={imagem} style={styles.imagemModal} ></Card.Cover>
            
    </Card>
}