import { StyleSheet } from "react-native";

const COLORS = {
  primary: "#005362",
  accent: "#527954",
  white: "#FFFFFF",
  light: "#F7F7F7",
  dark: "#1E1E1E",
  gray: "#A0A0A0",
  danger: "#E74C3C",
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  containerHome: {
    flex: 1,
    backgroundColor: COLORS.accent,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primary,
    marginTop: 180,
    marginBottom: 40,
  },

  titulo2: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.white,
    marginTop: 140,
    marginBottom: 40,
  },

  inputView: {
    width: "55%",
    marginBottom: 20,
  },

  input: {
    marginBottom: 20,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 6,
  },

  buttonView: {
    width: "55%",
  },

  button: {
    backgroundColor: COLORS.primary,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 15,
  },

  buttonSec: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 2,
  },

  buttonSecText: {
    color: COLORS.primary,
  },

  inputPicker: {
    marginBottom: 20,
    backgroundColor: COLORS.white,
    paddingLeft: 8,
    paddingVertical: 10,
    borderRadius: 6,
  },

  textPicker: {
    fontSize: 12,
  },

  listItem: {
    backgroundColor: COLORS.light,
    borderBottomWidth: 0,
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: "100%",
  },

  listaItem: {
    backgroundColor: COLORS.light,
    borderBottomWidth: 0,
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: "100%",
  },

  TabInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  buttonTab: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },

  buttonTab1: {
    paddingLeft: 25,
    paddingRight: 25,
  },

  buttonTextTab: {
    color: "blue",
    fontWeight: "700",
    fontSize: 15,
  },

  buttonTextTab2: {
    color: "black",
    fontWeight: "700",
    fontSize: 15,
  },

  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginVertical: 8,
    textAlign: "left",
  },

  flatlist: {
    flex: 1,
    width: "90%",
    height: "100%",
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: "center",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  modalContainer: {
    width: "100%",
    maxWidth: 520,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    elevation: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  modalTitulo: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.primary,
    marginBottom: 12,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  modalText: {
    fontSize: 16,
    color: "#333333",
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 0.3,
    marginVertical: 8,
  },

  Icone: {
    fontSize: 28,
    marginRight: 10,
    marginTop: 140,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    borderRadius: 50, // bordas arredondadas
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
