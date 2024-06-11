import React from "react";
import { View, Button } from "react-native";

import styles from "../styles";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Juego Rápido"
        onPress={() => navigation.navigate("SelectDifficulty")}
      />
      <Button
        title="Dos Jugadores"
        onPress={() => navigation.navigate("SelectDifficulty")}
      />
    </View>
  );
}
export default HomeScreen;
