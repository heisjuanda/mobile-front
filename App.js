// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import io from "socket.io-client";

import HomeScreen from "./screens/Home";
import SelectDifficultyScreen from "./screens/SelectDifficulty";
import Card from "./screens/Card";
import Register from "./screens/RegisterUsers";

const Stack = createStackNavigator();

function App() {
  const socket = io("http://localhost:3000");

  React.useEffect(() => {
    function connectSocket() {
      socket.on("connection", (socket) => {
        console.log(socket);
      });
    }

    connectSocket();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="SelectDifficulty"
          component={SelectDifficultyScreen}
        />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen
          name="TwoPlayers"
          component={Register}
          initialParams={{ socket: socket }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
