import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  // Câmera
  camera: {
    width: '100%',
    height: '40%',
    alignSelf: 'center',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  cameraVirarBotao: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },

  // Card com os campos
  cardContainer: {
    marginTop: 20,
    backgroundColor: 'lightgray',
    width: '85%',
    alignSelf: 'center',
    borderRadius: 10,
  },

  // Textos e inputs
  text: {
    fontSize: 16,
    marginLeft: 10,
    color: 'purple',
    marginTop: 8,
  },
  input: {
    width: '90%',
    marginBottom: 10,
    marginLeft: 15,
    fontSize: 16,
    borderRadius: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    paddingVertical: 4,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 16,
  },
});

export default Styles;