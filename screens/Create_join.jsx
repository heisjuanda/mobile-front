import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "../styles";

function Create_join({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create or Join a Game</Text>
      <Pressable
        style={styles.button_1}
        onPress={() => navigation.navigate("")}
      >
        <Text style={styles.buttonText}>Create Game</Text>
      </Pressable>
      <Pressable
        style={styles.button_2}
        onPress={() => navigation.navigate("")}
      >
        <Text style={styles.buttonText}>Join Game</Text>
      </Pressable>
    </View>
  );
}

export default Create_join;