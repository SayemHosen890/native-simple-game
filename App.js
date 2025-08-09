import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { GameStartScreen } from "./screen/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screen/GameScreen";
import Color from "./constant/Color";
import GameOverScreen from "./screen/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true)
  }

  let screen = <GameStartScreen onPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen></GameOverScreen>;
  }

  return (
    <LinearGradient
      colors={[Color.primary800, Color.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
