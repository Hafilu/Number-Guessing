import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Numbercontainer from "../Components/Game/Numbercontainer";
import Card from "../Components/Ui/Card";
import Instructiontext from "../Components/Ui/Instructiontext";
import Primarybutton from "../Components/Ui/Primarybutton";
import Title from "../Components/Ui/Title";
import { Ionicons } from "@expo/vector-icons";
import Guesslogitem from "../Components/Game/Guesslogitem";

function generateRandomBetween(max, min, exclude) {
  const rndm = Math.floor(Math.random() * (max - min) + min);

  if (rndm === exclude) {
    return generateRandomBetween(max, min, exclude);
  } else {
    return rndm;
  }
}

let minboundary = 1;
let maxboundary = 100;

function Gamescreen({ usernumber, ongameover }) {
  const initialguess = generateRandomBetween(1, 100, usernumber);
  const [currentguess, setCurrentGuess] = useState(initialguess);
  const [guessround, setGuessRound] = useState([initialguess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setTimeout(() => {
      if (currentguess === usernumber) {
        ongameover(guessround.length);
      }
    }, 250);
  }, [currentguess, usernumber, ongameover]);

  useEffect(() => {
    minboundary = 1;
    maxboundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentguess < usernumber) ||
      (direction === "higher" && currentguess > usernumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxboundary = currentguess;
    } else {
      minboundary = currentguess + 1;
    }

    const newrndm = generateRandomBetween(
      minboundary,
      maxboundary,
      currentguess
    );
    setCurrentGuess(newrndm);
    setGuessRound((previousguessround) => [newrndm, ...previousguessround]);
  }

  const listlength = guessround.length;

  let content = (
    <>
      <Numbercontainer>{currentguess}</Numbercontainer>
      <Card>
        <Instructiontext style={styles.instructiontext}>
          Higher or Lower?
        </Instructiontext>
        <View style={styles.buttonscontainer}>
          <View style={styles.buttoncontainer}>
            <Primarybutton onpress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="#ddb52f" />
            </Primarybutton>
          </View>
          <View style={styles.buttoncontainer}>
            <Primarybutton onpress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="#ddb52f" />
            </Primarybutton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
         
        <View style={styles.buttoncontainerwide}>
          <View style={styles.buttoncontainer}>
            <Primarybutton onpress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="#ddb52f" />
            </Primarybutton>
          </View>
          <Numbercontainer>{currentguess}</Numbercontainer>
          <View style={styles.buttoncontainer}>
            <Primarybutton onpress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="#ddb52f" />
            </Primarybutton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title> Opponent's Guess</Title>
      {content}
      <View style={styles.listcontainer}>
        {/* { guessround.map(round => <Text key={round}>{round}</Text>)} */}
        <FlatList
          data={guessround}
          renderItem={(itemdata) => (
            <Guesslogitem
              roundnumber={listlength - itemdata.index}
              guess={itemdata.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default Gamescreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

  instructiontext: {
    marginBottom: 12,
  },

  buttonscontainer: {
    flexDirection: "row",
  },
  buttoncontainer: {
    flex: 1,
  },
  buttoncontainerwide:{
    flexDirection:"row",
    alignItems:"center"
  },
  listcontainer: {
    flex: 1,
    padding: 16,
  },
});
