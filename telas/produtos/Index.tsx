import { FlatList, View } from "react-native";
import styles from "./estilosProdutos";

import TextoPadrao from "../../componentes/TextoPadrao";
import CadaProduto from "../produtos/Produto"

export default function Index({itens}:any) {
    return <View  style={styles.corFundo}>
            <TextoPadrao style={styles.titulo}>{itens.titulo}</TextoPadrao>
        <FlatList
            data={itens.lista}
            renderItem={({item})=> <CadaProduto item={item} />}
            keyExtractor={itens.lista.id} /*como se fosse um laço de repetição*/
        />

    </View>
}