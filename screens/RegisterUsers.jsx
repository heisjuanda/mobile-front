import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";

import styles from "../styles";

function Register({ route, navigation }) {
  const { socket } = route.params || {};

  const [users, setUsers] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [block, setBlock] = React.useState(false);

  const [isStarted, setIsStarted] = React.useState(false);

  const [gameState, setGameState] = React.useState(null);
  const [gameOver, setGameOver] = React.useState(false);
  const [winners, setWinners] = React.useState([]);

  const handleRegister = () => {
    if (username && username.trim() !== "") {
      socket.emit("register", username);
      setUsername("");
      setUsers([...users, username]);
    }
  };

  const handleStart = () => {
    socket.emit("start");
    setIsStarted(true);
  };

  React.useEffect(() => {
    if (users.length === 2) {
      setBlock(true);
    }
  }, [users]);

  React.useEffect(() => {
    console.log("game", gameState);
    if (socket) {
      socket.on("gameState", (state) => {
        console.log("gameState", state);
        setGameState(state);
        setGameOver(false);
      });

      socket.on("gameOver", ({ winners, scores }) => {
        setGameOver(true);
        setWinners(winners);
      });

      return () => {
        socket.off("gameState");
        socket.off("gameOver");
      };
    }
  }, [socket]);

  React.useEffect(() => {
    handleRestart();
  }, []);

  const flipCard = (index) => {
    socket.emit("flipCard", index);
  };

  const getCardValue = (index) => {
    socket.emit("getCardValue", index, (value) => {
      console.log(`Card value at index ${index}:`, value);
    });
  };

  const handleRestart = () => {
    socket.emit("restart");
  };

  const handleRestartMatch = () => {
    setIsStarted(false);
    setUsers([]);
    handleRestart();
    setBlock(false);
    setWinners(false);
    setGameOver(false);
    setGameState(null);
  };

  if (isStarted) {
    return (
      <View style={styles.container}>
        {gameOver ? (
          <div>
            <Text style={styles.subtitle}>Ganador: </Text>
            <Text style={styles.buttonText}>{winners.join(", ")}</Text>
            <br />
            <Text style={styles.buttonText}>
              <b>Puntos </b> <br />
              {JSON.stringify(gameState?.scores)
                ?.replaceAll("{", "")
                .replaceAll('"', "")
                .replaceAll("}", "")
                .split(",")
                .map((el, index) => (
                  <>
                    <span key={index}>{el}</span>
                    <br />
                  </>
                ))}
            </Text>
            <br />
            <Pressable style={styles.button_1} onPress={handleRestartMatch}>
              <Text style={styles.buttonText}>Reiniciar</Text>
            </Pressable>
          </div>
        ) : (
          <div style={styles.flex}>
            {gameState &&
              gameState.grid.map((card, index) => (
                <Pressable
                  key={index}
                  onPress={() => flipCard(index)}
                  style={
                    gameState?.turn ? styles.cardUpTwo : styles.cardDownTwo
                  }
                  disabled={
                    card.found || gameState.flippedCards.includes(index)
                  }
                >
                  <Text style={styles.cardTextTwo}>
                    {card.found || gameState.flippedCards.includes(index)
                      ? card.symbol
                      : "?"}
                  </Text>
                </Pressable>
              ))}
          </div>
        )}
        <div>
          {gameState?.turn && (
            <div style={styles.turn}>
              <Text style={styles.buttonText}>
                <b>Turno:</b>{" "}
              </Text>
              <Text style={styles.buttonText}>{gameState?.turn}</Text>
            </div>
          )}
        </div>
        <div>
          {gameState?.scores && (
            <>
              {Object.entries(gameState?.scores || {}).map(
                ([player, score], index) => (
                  <div
                    style={
                      index % 2 === 0 ? styles.playerOne : styles.playerTwo
                    }
                    key={index}
                  >
                    <Text style={styles.buttonText}>
                      <b>{player}</b>: {score}
                    </Text>
                  </div>
                )
              )}
            </>
          )}
        </div>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Pressable
        style={block ? styles.button_disabled : styles.button_1}
        onPress={handleRegister}
        disabled={block}
      >
        <Text style={styles.buttonText}>Registrar</Text>
      </Pressable>
      {users &&
        users.map((user, index) => (
          <Text key={index} style={styles.buttonText}>
            {user}
          </Text>
        ))}
      <Pressable
        disabled={!block}
        style={!block ? styles.button_disabled : styles.button_1}
        onPress={handleStart}
      >
        <Text style={styles.buttonText}>Empezar</Text>
      </Pressable>
    </View>
  );
}

export default Register;
