import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#4A3A83",
    position: "relative",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "snow",
    marginVertical: 15,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "900",
    color: "snow",
    marginVertical: 15,
  },
  button_1: {
    width: 200,
    height: 50,
    padding: 15,
    margin: 25,
    backgroundColor: "#5FCAEC",
    borderRadius: 30,
  },
  button_2: {
    width: 200,
    height: 50,
    padding: 15,
    margin: 25,
    backgroundColor: "#61B65F",
    borderRadius: 30,
  },
  button_3: {
    width: 200,
    height: 50,
    padding: 15,
    margin: 25,
    backgroundColor: "#FDB878",
    borderRadius: 30,
  },
  button_disabled: {
    opacity: "0.5",
    width: 200,
    height: 50,
    padding: 15,
    margin: 25,
    backgroundColor: "#5FCAEC",
    borderRadius: 30,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
  cardText: {
    fontSize: 46,
    color: "#334155",
  },
  cardTextTwo: {
    fontSize: 26,
    color: "#334155",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: "1px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center"
  },
  cardUp: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 2,
    borderColor: "rgba(101, 115, 135, 0.5)",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8378AA",
    shadowColor: "#000", // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.5, // Opacidad de la sombra
    shadowRadius: 3.84, // Radio de la sombra
    elevation: 5, // Elevación para Android
  },
  cardDown: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "#8378AA",
    alignItems: "center",
    justifyContent: "center",
  },
  cardUpTwo: {
    width: 50,
    height: 50,
    margin: 10,
    borderWidth: 2,
    borderColor: "rgba(101, 115, 135, 0.5)",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8378AA",
    shadowColor: "#000", // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.5, // Opacidad de la sombra
    shadowRadius: 3.84, // Radio de la sombra
    elevation: 5, // Elevación para Android
  },
  cardDownTwo: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 12,
    backgroundColor: "#8378AA",
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  playerOne: {
    position: "absolute",
    top: "10px",
    left: "10px",
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
  },
  playerTwo: {
    position: "absolute",
    bottom: "20px",
    left: "10px",
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
  },
  turn: {
    position: "absolute",
    right: "10px",
    top: "5px",
  },
  input: {
    width: 200,
    height: 25,
    padding: 15,
    margin: 25,
    backgroundColor: "white",
    borderRadius: 30,
  }
});
