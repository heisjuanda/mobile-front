import React from "react";
import { View, Button, Pressable, Text } from "react-native";

import styles from "../styles";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button_1}
        onPress={() => navigation.navigate("SelectDifficulty")}
      >
        <Text style={styles.buttonText}>Juego Rápido</Text>
      </Pressable>
      <Pressable
        style={styles.button_2}
        onPress={() => navigation.navigate("SelectDifficulty")}
      >
        <Text style={styles.buttonText}>Dos Jugadores</Text>
      </Pressable>
    </View>
  );
}
export default HomeScreen;
