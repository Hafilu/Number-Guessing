import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import Startgamescreen from "./Screens/Startgamescreen";
import { useEffect, useState } from "react";
import Gamescreen from "./Screens/Gamescreen";
import colors from "./constants/colors";
import Gameoverscreen from "./Screens/Gameoverscreen";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn);

export default function App() {
  const [usernumber, setUserNumber] = useState();
  const [gameisover, setGameIsOver] = useState(true);
  const [guessround, setGuessRound] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(pickednumber) {
    setUserNumber(pickednumber);
    setGameIsOver(false);
  }

  function gameOverHandler(rounds) {
    setGameIsOver(true);
    setGuessRound(rounds);
  }

  function startNewGameHnadler() {
    setUserNumber(null);
    setGuessRound(0);
  }

  let screen = <Startgamescreen onpicknumber={pickedNumberHandler} />;

  if (usernumber) {
    screen = (
      <Gamescreen usernumber={usernumber} ongameover={gameOverHandler} />
    );
  }

  if (gameisover && usernumber) {
    screen = (
      <Gameoverscreen
        roundsnumber={guessround}
        usernumber={usernumber}
        onStartNewGame={startNewGameHnadler}
      />
    );
  }

  return (
    <>
    <StatusBar style="light"/>
    <LinearGradient
      colors={[colors.primary600, colors.accent500]}
      style={styles.rootcontainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.rootcontainer}
        imageStyle={styles.imagebackground}
        resizeMethod="auto"
      >
        <SafeAreaView style={styles.rootcontainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
  },
  imagebackground: {
    opacity: 0.2,
  },
});
