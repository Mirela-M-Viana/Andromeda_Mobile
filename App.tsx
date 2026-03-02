import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello World! no APP </Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9d1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 30,
    fontFamily: 'cursive'
  }
});
