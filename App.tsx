//menu
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//telas do sobre
import Sobre from './telas/Sobre';

//configuração do Menu
const Tab = createBottomTabNavigator();

//cria estrutura Menu
function Menu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}