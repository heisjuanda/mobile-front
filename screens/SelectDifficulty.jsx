import React from "react";
import { View, Text,Button } from "react-native";

import styles from "../styles";


function SelectDifficultyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Select Difficulty Screen</Text>
      <Button title="Fácil" onPress={() => navigation.navigate("Card")} />
      <Button title="Medio" onPress={() => navigation.navigate("Home")} />
      <Button title="Díficil" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default SelectDifficultyScreen;
