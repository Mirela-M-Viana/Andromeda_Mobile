import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.texto}>Hello World! no APP </Text> */}
      <StatusBar style="light" />

      <Image source={require('./assets/logo.png')} style={styles.logo}/>
      <Text style={styles.apresentacao} >
        Andrômeda é uma Joalheria para quem ama o céu, 
        as estrelas e os misterios do universo!
        {'\n'} Venha conhecer nossos produtos, e se apaixone pelos 
        astros cada vez mais!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  'rgb(71, 33, 114)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 30,
    fontFamily: 'cursive'
  },

  logo:{
    width: 300,
    height: 300,
  },

  apresentacao:{
    fontSize: 15,
    width: 300,
    textAlign: 'center',
    color: '#ffffff'

  }
});
