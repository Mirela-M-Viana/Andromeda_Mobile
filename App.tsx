//menu
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

//telas do sobre
import Sobre from './telas/Sobre';

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
      <Tab.Screen name="Produtos" component={Sobre} />
      <Tab.Screen name="Perfil" component={Sobre} />
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