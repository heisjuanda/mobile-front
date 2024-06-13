import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#4A3A83"
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "snow",
    marginVertical: 15,
  },
  button_main: {
    padding: "10px",
    backgroundColor: '#5FCAEC',
    borderRadius: 18,
  },
  // button_main: {
  //   padding: "10px",
  //   backgroundColor: 'black',
  //   borderRadius: 8,
  // },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  cardText: {
    fontSize: 46,
    color: "#334155",
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
    borderWidth: 2,
    borderColor: "rgba(101, 115, 135, 0.5)",
    borderRadius: 25,
    backgroundColor: "#8378AA",
    alignItems: "center",
    justifyContent: "center",
   
  },
  board: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
