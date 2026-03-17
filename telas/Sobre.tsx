import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

export default function Sobre() {
  const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', player=>{player.loop= true; player.play();});
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <Text style={styles.texto} >
        Andrômeda é uma Joalheria para quem ama o céu, 
        as estrelas e os misterios do universo!
        {'\n'} Venha conhecer nossos produtos, e se apaixone pelos 
        astros cada vez mais!
      </Text>
      
      <Image source={require('../assets/Loja.jpg')} style={styles.loja}/>
      <VideoView player={player} style={styles.video} allowsPictureInPicture/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  'rgb(71, 33, 114)',
    //alignItems: 'center',
   // justifyContent: 'center',
  },
  texto:{
    fontSize: 15,
    width: 300,
    textAlign: 'center',
    color: '#ffffff',
    alignSelf: 'center',

  },

  logo:{
    width: 300,
    height: 300,
    alignSelf: 'center',
  },

  loja:{
    width: 300,
    height: 420,
    marginTop: 30,
    alignSelf: 'center',

  }, 

  video:{
    width: 350, 
    height: 275,
    alignSelf: 'center'
  }, 
});
