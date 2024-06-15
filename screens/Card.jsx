import * as React from "react";
import { View, Text, Pressable, Button } from "react-native";
import styles from "../styles";

const allCards = [
  "🥹",
  "🗣️",
  "🦷",
  "🍑",
  "🌪️",
  "🌎",
  "🐷",
  "🪝",
  "⚛️",
  "🔑",
  "🥕",
  "🥑",
  "👻",
  "🥶",
  "🥵",
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function CardItem({ card, onPress, isTurnedOver }) {
  return (
    <Pressable
      onPress={onPress}
      style={isTurnedOver ? styles.cardUpTwo : styles.cardDownTwo}
    >
      {isTurnedOver ? (
        <Text style={styles.cardText}>{card}</Text>
      ) : (
        <Text style={styles.cardText}>?</Text>
      )}
    </Pressable>
  );
}

function Card({ route }) {
  const { difficulty } = route.params;
  
  const getCardsForDifficulty = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return allCards.slice(0, 4);
      case 'medium':
        return allCards.slice(0, 8);
      case 'hard':
        return allCards;
      default:
        return allCards.slice(0, 4); // Default to easy if no difficulty is provided
    }
  };

  const cards = getCardsForDifficulty(difficulty);

  // Crear el tablero con cartas duplicadas y mezcladas una vez al montar el componente
  const [board, setBoard] = React.useState(() => shuffle([...cards, ...cards]));
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [matchedCards, setMatchedCards] = React.useState([]);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    if (selectedCards.length < 2) return;
    if (board[selectedCards[0]] === board[selectedCards[1]]){
        setMatchedCards([...matchedCards, ...selectedCards])
        setSelectedCards([]);
    } else{
        const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
        return () => clearTimeout(timeoutId);
    }
  }, [selectedCards])

  const handleTapCard = (index) => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
    setScore(score + 1);
  };

  const didPlayerWin = () => matchedCards.length === board.length; 
  const resetGame = () => {
    setMatchedCards([]);
    setScore(0);
    setSelectedCards([]);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{didPlayerWin() ? "Congratulations" : "Memory Game"}</Text>
      <Text style={styles.title}>Score: {score}</Text>
      <View style={styles.board}>
        {board.map((card, index) => {
          const isTurnedOver = selectedCards.includes(index) || matchedCards.includes(index);
          return (
            <CardItem
              key={index}
              isTurnedOver={isTurnedOver}
              onPress={() => handleTapCard(index) }
              card={card}
            />
          );
        })}
      </View>
      {didPlayerWin() && <Button onPress={resetGame} title="Play Again" />}
    </View>
  );
}

export default Card;
