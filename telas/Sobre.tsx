import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import TextoPadrao from '../componentes/TextoPadrao';

export default function Sobre() {
  const player = useVideoPlayer(require('../video/video1.mp4'), (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      <Image source={require('../assets/logo.png')} style={styles.logo} />


      <TextoPadrao estiloEspecifico={styles.texto}>
        <Text style={styles.destaque}>Andrômeda</Text> 
        {' '}é uma Joalheria para quem ama o céu,
        as estrelas e os mistérios do universo!{'\n'}
        Venha conhecer nossos produtos, e se apaixone pelos astros cada vez mais!
      </TextoPadrao>

      <Image source={require('../assets/Loja.jpg')} style={styles.loja} />
      <VideoView player={player} style={styles.video} allowsPictureInPicture />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(71, 33, 114)',
    paddingHorizontal: 16,
  },
  texto: {
    color: '#ffffff',
  },

  destaque: {
    color: '#C9A96E',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  loja: {
    width: 367,
    height: 500,
    marginTop: 30,
    alignSelf: 'center',
  },
  video: {
    marginTop: 30,
    width: 370,
    height: 290,
    alignSelf: 'center',
  },
});