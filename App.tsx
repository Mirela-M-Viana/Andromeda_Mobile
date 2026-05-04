import { View } from "react-native";

//menu
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';


//fontes
import {useFonts, Lora_400Regular, Lora_600SemiBold } from "@expo-google-fonts/lora"

//telas do sobre
import Sobre from './telas/Sobre';

//Tela de Produtos (lista)
import Produtos from './telas/produtos/Index';
import ListaProdutos from './telas/mock/listaProdutos';

function MenuProdutos(){
  return <Produtos {...ListaProdutos} />
}

//configuração do Menu
const Tab = createBottomTabNavigator();

//cria estrutura Menu
function Menu() {
  return (
    <Tab.Navigator
    screenOptions ={({route})=> ({
      tabBarIcon: ({focused,color}) => {
        let iconName;

        if (route.name === "Sobre"){
          iconName = focused
          ? 'diamond'
          : 'diamond-outline';
        } else if(route.name == "Produtos"){
           iconName = focused
          ? 'bag'
          : 'bag-outline';
        }else if(route.name == "Perfil"){
           iconName = focused
          ? 'person'
          : 'person-outline';

        }
        return <Ionicons name ={iconName} size={22} color={color}/>
      },

      headerShown: false,
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'grey',
    })}>
      
      <Tab.Screen name="Sobre" component={Sobre} />
      <Tab.Screen name="Produtos" component={MenuProdutos} />
      <Tab.Screen name="Perfil" component={Sobre} />
    </Tab.Navigator>
  );
}

export default function App() {

  //Carrega fonte
  const [fonteCarregada] = useFonts({"lora":Lora_400Regular ,
                                    "lora 2": Lora_600SemiBold});

  //Verificação se a fonte esta carregada
  if(!fonteCarregada){
      return <View></View>
  }
  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}