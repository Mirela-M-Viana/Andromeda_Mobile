
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

  // Container raiz da tela (não usado diretamente no render principal,
  container: {
    flex: 1,
    backgroundColor: '#FAF7F4', // Fundo creme suave
  },

  // HEADER — Bloco superior com título da tela
  headerContainer: {
    paddingTop: 52,           // Espaço extra para não colidir com a status bar
    paddingBottom: 20,
    paddingHorizontal: 24,
    backgroundColor: 'rgb(71, 33, 114)', // Roxo-noite — cria contraste luxuoso
    alignItems: 'center',       // Centraliza os textos horizontalmente
  },

  // Subtítulo acima do título principal
  headerSubtitle: {
    fontSize: 11,
    letterSpacing: 4,           
    color: '#C9A96E',         
    textTransform: 'uppercase',
    marginBottom: 6,
  },

  // Título principal: "Nos mostre sua beleza"
  headerTitle: {
    fontSize: 26,
    color: '#FAF7F4',   // Creme — legível sobre o fundo escuro
    fontWeight: '300',  // Peso leve para efeito refinado
    letterSpacing: 1,
    textAlign: 'center',
  },

  // Estilo aplicado à palavra "beleza" dentro do título
  headerAccent: {
    fontWeight: '700',
    color: '#C9A96E',    // Dourado
    fontStyle: 'italic',
  },

  // CÂMERA
  // Wrapper externo da câmera: cria bordas arredondadas e sombra
  // overflow: 'hidden' garante que a câmera respeite o borderRadius
  cameraWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    overflow: 'hidden',        // Corta o conteúdo nos cantos arredondados
    elevation: 6,              // Sombra no Android
    shadowColor: '#1A0A2E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 10,          // Sombra no iOS
  },

  camera: {
    width: '100%',
    height: 240, 
  },

  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end',          // Alinhados na parte inferior
    padding: 14,
  },

  // Botão circular 
  cameraVirarBotao: {
    backgroundColor: 'rgba(26,10,46,0.55)', // Roxo semitransparente
    borderRadius: 20,
    padding: 8,
  },

  // Botão "Tirar foto" 
  cameraCaptureButton: {
    backgroundColor: '#C9A96E',  // Dourado — destaque principal
    borderRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 10,
    flexDirection: 'row',        // Ícone e texto lado a lado
    alignItems: 'center',
    gap: 6,                      // Espaço entre o ícone e o texto
  },

  cameraCaptureText: {
    color: '#1A0A2E',   // Escuro sobre fundo dourado
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.5,
  },

  // CARD DO FORMULÁRIO
  cardContainer: {
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 4,              // Sombra Android
    shadowColor: '#1A0A2E',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.10,
    shadowRadius: 8,           // Sombra iOS
    paddingVertical: 6,        // Espaçamento interno vertical
  },

  
  fieldLabel: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#C9A96E',           // Dourado
    textTransform: 'uppercase',
    marginLeft: 16,
    marginTop: 14,
    marginBottom: 2,
  },

  // Campo de texto — linha inferior sutil em vez de borda completa
  input: {
    marginHorizontal: 16,
    marginBottom: 4,
    fontSize: 15,
    color: '#1A0A2E',            // Texto escuro
    borderBottomWidth: 1,
    borderBottomColor: '#E8E0D5', // Linha bege clara
    paddingVertical: 8,
  },

  // SELETOR DE PRODUTO Modal
  seletorBotao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E0D5',
    paddingVertical: 10,
  },
  seletorTexto: {
    fontSize: 15,
    color: 'rgb(71, 33, 114)',
  },

  // Fundo escurecido que cobre a tela quando o Modal está aberto
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'flex-end', // Card sobe a partir da base da tela
  },
  // Card branco com a lista de opções
  modalCard: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 36,
    paddingHorizontal: 16,
  },
  modalTitulo: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: '#C9A96E',
    textTransform: 'uppercase',
    marginBottom: 12,
    marginLeft: 4,
  },
  // Cada linha da lista
  modalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#F0EAE2',
  },
  // Destaque no item atualmente selecionado
  modalItemSelecionado: {
    backgroundColor: '#FAF7F4',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  modalItemTexto: {
    fontSize: 15,
    color: '#1A0A2E',
  },
  modalItemTextoSelecionado: {
    color: '#C9A96E',
    fontWeight: '700',
  },

  // ESTRELAS DE AVALIAÇÃO
  // Row que contém as 5 estrelas lado a lado
  starsRow: {
    flexDirection: 'row',
    marginLeft: 14,
    marginTop: 6,
    marginBottom: 8,
    gap: 6, // Espaço entre cada estrela
  },

  // DIVISOR
  // Linha fina que separa os campos pessoais dos campos de produto
  divider: {
    height: 1,
    backgroundColor: '#F0EAE2', // Bege muito claro
    marginHorizontal: 16,
    marginVertical: 8,
  },

  // BOTÃO DE ENVIO
  submitButton: {
    marginHorizontal: 20,
    marginBottom: 32,
    backgroundColor: 'rgb(71, 33, 114)',  
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',        // Ícone e texto lado a lado
    justifyContent: 'center',
    gap: 10,
    elevation: 4,                // Sombra Android
    shadowColor: '#1A0A2E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,             // Sombra iOS
  },

  submitText: {
    color: '#C9A96E',          // Dourado
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },

  // TELA DE PERMISSÃO DA CÂMERA

  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF7F4',
    padding: 32,
  },

  // Texto explicativo da tela de permissão
  message: {
    textAlign: 'center',
    fontSize: 15,
    color: '#1A0A2E',
    marginBottom: 20,
    lineHeight: 22,
  },

  // Botão dourado para solicitar permissão da câmera
  permissionButton: {
    backgroundColor: '#C9A96E',
    borderRadius: 10,
    paddingHorizontal: 28,
    paddingVertical: 12,
  },

  // Texto dentro do botão de permissão
  permissionButtonText: {
    color: '#1A0A2E',   // Escuro sobre dourado
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 1,
  },

});

export default Styles;