import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "../styles";


function SelectDifficultyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Difficulty</Text>
      <Pressable
        style={styles.button_1}
        onPress={() => navigation.navigate("Card", { difficulty: "easy" })}
      >
        <Text style={styles.buttonText}>Easy</Text>
      </Pressable>
      <Pressable
        style={styles.button_2}
        onPress={() => navigation.navigate("Card", { difficulty: "medium" })}
      >
        <Text style={styles.buttonText}>Half</Text>
      </Pressable>
      <Pressable
        style={styles.button_3}
        onPress={() => navigation.navigate("Card", { difficulty: "hard" })}
      >
        <Text style={styles.buttonText}>Hard</Text>
      </Pressable>
    </View>
  );
}

export default SelectDifficultyScreen;
